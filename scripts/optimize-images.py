"""Optimize public images: resize to display @2x and convert to WebP."""
from pathlib import Path
from PIL import Image
import os

ROOT = Path(r'C:\Users\KholwaniMabhena\work\tapseed\26-tapseed-payments\public')

# max edge length (longest side) for @2x display sizes
RULES = [
    # (glob or relative path, max_side, quality)
    ('hero-image.jpg', 900, 80),
    ('appletree-payments-logo-white.png', 400, 82),
    ('appletree-payments-logo.png', 400, 82),
    ('appletree-payments-share.png', 1200, 82),  # keep as optimized png for OG
    ('appletree-payments-favicon.png', 192, 82),
    ('favicon.png', 64, 82),
    ('glass-icons/*.png', 288, 80),
    ('pointer-icons/*.png', 96, 80),
    ('payment-solutions-icons/*.png', 112, 80),
    ('payment-methods/*.png', 240, 80),
    ('social-media/*.png', 80, 80),
]

# OG / favicon stay PNG (better social crawler support)
KEEP_PNG = {
    'appletree-payments-share.png',
    'appletree-payments-favicon.png',
    'favicon.png',
}

UNUSED = [
    'hero-image1.png',
    'hero-image2.jpg',
    'hero-image3.jpg',
    'hero-image4.jpg',
    'hero-image5.jpg',
]


def expand(pattern):
    if '*' in pattern:
        return sorted(ROOT.glob(pattern))
    p = ROOT / pattern
    return [p] if p.exists() else []


def optimize(src: Path, max_side: int, quality: int, as_webp: bool):
    img = Image.open(src)
    # Convert palette/RGBA carefully
    if as_webp:
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGBA' if 'A' in img.getbands() else 'RGB')
    else:
        if img.mode in ('P', 'RGBA'):
            # keep alpha for PNG favicons
            if img.mode == 'P':
                img = img.convert('RGBA')
        elif img.mode != 'RGB':
            img = img.convert('RGB')

    w, h = img.size
    scale = min(1.0, max_side / max(w, h))
    if scale < 1.0:
        new_size = (max(1, int(w * scale)), max(1, int(h * scale)))
        img = img.resize(new_size, Image.Resampling.LANCZOS)

    if as_webp:
        out = src.with_suffix('.webp')
        img.save(out, 'WEBP', quality=quality, method=6)
        return out, src.stat().st_size, out.stat().st_size
    else:
        # recompress PNG in place via temp
        tmp = src.with_suffix('.opt.png')
        img.save(tmp, 'PNG', optimize=True)
        before = src.stat().st_size
        after = tmp.stat().st_size
        if after < before:
            tmp.replace(src)
            return src, before, after
        tmp.unlink(missing_ok=True)
        return src, before, before


results = []
converted_sources = []

for pattern, max_side, quality in RULES:
    for src in expand(pattern):
        if not src.is_file():
            continue
        # skip already-webp
        if src.suffix.lower() == '.webp':
            continue
        name = src.name
        as_webp = name not in KEEP_PNG
        try:
            out, before, after = optimize(src, max_side, quality, as_webp)
            results.append((src.relative_to(ROOT).as_posix(), out.relative_to(ROOT).as_posix(), before, after))
            if as_webp and out != src:
                converted_sources.append(src)
        except Exception as e:
            print('FAIL', src, e)

print('\n=== Conversions ===')
total_before = total_after = 0
for src, out, b, a in results:
    total_before += b
    total_after += a
    print(f'{src} -> {out}: {b/1024:.1f}KB -> {a/1024:.1f}KB ({100*(1-a/b):.0f}% smaller)' if b else f'{src}')

print(f'\nTOTAL referenced assets: {total_before/1024:.0f}KB -> {total_after/1024:.0f}KB')

# Delete originals that were converted to webp
deleted = []
for src in converted_sources:
    # Don't delete if something still needs png (share etc already skipped)
    try:
        src.unlink()
        deleted.append(src.relative_to(ROOT).as_posix())
    except Exception as e:
        print('delete fail', src, e)

# Delete unused hero variants
for name in UNUSED:
    p = ROOT / name
    if p.exists():
        size = p.stat().st_size
        p.unlink()
        deleted.append(f'{name} (unused, {size/1024:.0f}KB)')

# Delete oddly named pointer duplicate if present
for p in (ROOT / 'pointer-icons').glob('pointer-icons-05pointer*'):
    deleted.append(p.name)
    p.unlink()

print('\n=== Deleted ===')
for d in deleted:
    print(d)
print(f'\nDone. {len(results)} optimized, {len(deleted)} removed.')
