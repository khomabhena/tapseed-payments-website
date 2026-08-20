export const getRefundPolicy = [
    {
        title: "Document information",
        titleNumber: '',
        paragraphs: [
            {
                paragraph: "Effective Date: 05 August 2026 |   Version: 1.0   |   Document Owner: Compliance & Operations",
            },
            {
                paragraph: "This Refund Policy ('Policy') applies to all payment transactions processed through the Tapseed Payments gateway, including transactions acquired on behalf of card schemes and payment method partners such as UnionPay International, Visa, Mastercard, and supported mobile money and bank transfer methods. It should be read together with our Terms and Conditions and Privacy Policy, both published at tapseedpayments.com.",
            },
        ],
    },
    {
        title: "Purpose and Scope",
        titleNumber: "1.",
        paragraphs: [
            {
                paragraph: "Tapseed Payments operates as a payment gateway and acquiring facilitator, enabling merchants ('Merchants') to accept card and alternative payment method transactions from their customers ('Cardholders'). This Policy sets out the principles, eligibility criteria, and timelines that govern how refunds are requested, authorised, and processed across the Tapseed Payments platform, and applies to all supported payment methods, including UnionPay-branded cards.",
            },
            {
                paragraph: "Individual Merchants using the Tapseed Payments gateway must maintain and publish their own customer-facing refund, return, and cancellation terms, which must be consistent with, and no less protective of Cardholders than, this Policy and the applicable card scheme rules (including the UnionPay International Operating Regulations).",
            },
        ],
    },
    {
        title: "Definitions",
        titleNumber: "2.",
        paragraphs: [
            {
                paragraph: "",
                points: [
                    {
                        point: "Refund: A voluntary return of funds by a Merchant to a Cardholder for a settled transaction, processed back through Tapseed Payments to the original payment method.",
                    },
                    {
                        point: "Void / Cancellation: Reversal of an authorised but not-yet-settled transaction, removing it before it reaches the Cardholder's statement.",
                    },
                    {
                        point: "Chargeback / Dispute: A transaction reversal initiated by the Cardholder's issuing bank under UnionPay or other scheme rules, independent of a Merchant-approved refund.",
                    },
                    {
                        point: "Settlement: The point at which a transaction has cleared and funds have moved from the issuing bank to the acquirer for pay-out to the Merchant.",
                    },
                    {
                        point: "Original Payment Method: The specific card, wallet, or bank account used by the Cardholder to fund the original transaction.",
                    },
                ],
            },
        ],
    },
    {
        title: "Eligibility for Refunds",
        titleNumber: "3.",
        paragraphs: [
            {
                paragraph: "Settled transactions only. Only transactions that have successfully settled may be refunded. A transaction that has been authorised but not yet settled must instead be voided or cancelled through the Tapseed Payments dashboard or API.",
                points: [
                    {
                        point: "Time limit. Refund requests must be raised by the Cardholder with the Merchant, and by the Merchant with Tapseed Payments, within [14] calendar days of the original transaction date, unless a longer period is required by applicable law, the relevant Merchant's published policy, or UnionPay scheme rules.",
                    },
                    {
                        point: "Merchant-initiated. Refunds can only be initiated by the Merchant of record (or by Tapseed Payments on the Merchant's documented instruction). Tapseed Payments does not independently adjudicate the underlying reason for a refund; that determination sits with the Merchant, subject to applicable consumer protection law.",
                    },
                    {
                        point: "Duplicate or erroneous charges. Where a technical error results in a duplicate debit or an over-charge, the excess amount is identified through Tapseed Payments' reconciliation process and refunded to the Cardholder's original payment method without requiring a separate request, typically within [7] business days of detection.",
                    },
                    {
                        point: "Currency and amount. Refunds are issued in the original transaction currency and cannot exceed the original transaction amount. Partial refunds are permitted where supported by the Merchant's policy (see Section 6).",
                    },
                ],
            },
        ],
    },
    {
        title: "How a Refund Is Requested and Authorised",
        titleNumber: "4.",
        paragraphs: [
            {
                paragraph: "Cardholders should first contact the Merchant from whom the goods or services were purchased, using the contact details provided at checkout or on the Merchant's website. Once a Merchant approves a refund, it is submitted through the Tapseed Payments Merchant Dashboard or API, which routes the instruction to the relevant acquiring and scheme network.",
            },
            {
                paragraph: "Where a Cardholder is unable to resolve a refund request directly with the Merchant, Tapseed Payments' Support team can assist in mediating the request, without prejudice to the Cardholder's right to raise a formal dispute with their issuing bank.",
            },
        ],
    },
    {
        title: "Processing and Timelines",
        titleNumber: "5.",
        paragraphs: [
            {
                paragraph: "Refund to original payment method. All refunds are credited back to the exact card, mobile wallet, or bank account used for the original transaction. Tapseed Payments does not process refunds to a different account, card, or payment method under any circumstances, in line with card scheme and anti-money-laundering requirements.",
                points: [
                    {
                        point: "UnionPay cards: Tapseed processing [7] business days; typically reflects Subject to the Cardholder's issuing bank",
                    },
                    {
                        point: "Other card schemes (Visa / Mastercard): Tapseed processing [7] business days; typically reflects Subject to the Cardholder's issuing bank",
                    },
                    {
                        point: "Mobile money / instant EFT: Tapseed processing [7] business day; typically reflects Subject to the Cardholder's mobile money provider",
                    },
                    {
                        point: "Bank transfer: Tapseed processing [7] business days; typically reflects Subject to the Cardholder's issuing bank",
                    },
                ],
            },
            {
                paragraph: "*Measured from the date the Merchant authorises the refund on the Tapseed Payments platform. The final crediting date is ultimately determined by the Cardholder's issuing bank or financial institution and is outside Tapseed Payments' control.",
            },
        ],
    },
    {
        title: "Fees and Deductions",
        titleNumber: "6.",
        paragraphs: [
            {
                paragraph: "Processing fees. The original transaction processing fee is non-refundable and is retained by Tapseed unless if not supported by the issuing bank.This treatment will be confirmed in each Merchant Services Agreement.",
                points: [
                    {
                        point: "Partial refunds. Merchants may issue a partial refund for multi-item orders, part-cancellations, or agreed deductions (e.g. restocking or service fees), provided the partial amount is clearly itemised and communicated to the Cardholder.",
                    },
                    {
                        point: "Currency conversion. Where a transaction involved currency conversion, any refund is calculated using the exchange rate applied at the time of the original transaction; Tapseed Payments is not liable for foreign-exchange movements between the transaction and refund dates.",
                    },
                ],
            },
        ],
    },
    {
        title: "Relationship to Disputes and Chargebacks",
        titleNumber: "7.",
        paragraphs: [
            {
                paragraph: "A refund is a voluntary, Merchant-approved return of funds and is distinct from a chargeback, which is a reversal initiated by the Cardholder's issuing bank under UnionPay International's Operating Regulations or the rules of another applicable scheme. Where a dispute or chargeback is raised for a transaction that has already been refunded, Tapseed Payments will supply evidence of the refund to the relevant scheme to support representment. Merchants remain responsible for responding to dispute notifications within the timeframes set by Tapseed Payments and the applicable scheme.",
            },
        ],
    },
    {
        title: "Fraud, Errors, and Duplicate Transactions",
        titleNumber: "8.",
        paragraphs: [
            {
                paragraph: "Tapseed Payments' reconciliation and monitoring systems flag suspected duplicate charges, processing errors, and anomalous transaction patterns. Confirmed erroneous or duplicate charges are refunded to the original payment method without requiring a Merchant or Cardholder request. Suspected fraudulent transactions are additionally assessed under Tapseed Payments' Acceptable Use Policy and AML/KYC Policy and may be reported to the relevant scheme or regulator where required.",
            },
        ],
    },
    {
        title: "Merchant Responsibilities",
        titleNumber: "9.",
        paragraphs: [
            {
                paragraph: "The following apply:",
                points: [
                    {
                        point: "Publish a clear, customer-facing refund, return, and cancellation policy consistent with this Policy.",
                    },
                    {
                        point: "Only approve refunds for legitimate, verifiable reasons and retain supporting records for the period required under the Tapseed Payments Merchant Services Agreement.",
                    },
                    {
                        point: "Action approved refunds through the Tapseed Payments dashboard or API promptly, and no later than [Insert number] business days after approval.",
                    },
                    {
                        point: "Maintain sufficient settlement or reserve balance to fund refunds, chargebacks, and related fees.",
                    },
                    {
                        point: "Cooperate with Tapseed Payments' compliance, dispute, and fraud-monitoring processes on request.",
                    },
                ],
            },
        ],
    },
    {
        title: "Data Protection",
        titleNumber: "10.",
        paragraphs: [
            {
                paragraph: "Personal Data processed to administer a refund (such as Cardholder identity, card, and transaction data) is handled in accordance with Tapseed Payments' Privacy Policy, which is aligned with Zimbabwe's Cyber and Data Protection Act [Chapter 12:07] and, where applicable, the EU GDPR. Refund-related records are retained only for the periods described in the Privacy Policy, including the retention required for AML/CFT purposes, and Cardholders may exercise their data protection rights (including access, correction, and complaint to POTRAZ or an EU/EEA supervisory authority where applicable) as set out there.",
            },
        ],
    },
    {
        title: "Limitation of Liability",
        titleNumber: "11.",
        paragraphs: [
            {
                paragraph: "Tapseed Payments processes refunds on Merchant instruction and is not liable for a Merchant's decision to approve, decline, or delay a refund, except where the delay or error is directly caused by a fault in the Tapseed Payments platform. Tapseed Payments is not responsible for delays caused by an issuing bank, financial institution, or card scheme once a refund has been submitted for processing.",
            },
        ],
    },
    {
        title: "Policy Review and Amendments",
        titleNumber: "12.",
        paragraphs: [
            {
                paragraph: "This Policy is reviewed at least annually, and whenever required by changes in applicable law, UnionPay International or other scheme rules, or Tapseed Payments' risk and compliance framework. The current version is published at tapseedpayments.com and supersedes all prior versions from its effective date.",
            },
        ],
    },
    {
        title: "Contact Us",
        titleNumber: "13.",
        paragraphs: [
            {
                paragraph: "For questions about this Policy, or to escalate an unresolved refund request, contact Tapseed Payments Support via tapseedpayments.com contact page. Related documents: Terms and Conditions and Privacy Policy.",
            },
        ],
    },
]
