import React from 'react'

const FormCurves = () => {
  return (
    <div className=' relative bg-red-600 w-full min-h-80'>
      <div className=' absolute bottom-0 right-0 h-28 w-104'>
        <div className=' border-0 border-green-600 absolute top-0 left-0 h-14 w-52'>1</div>
        <div className=' border-r-2 border-green-600 absolute top-0 right-0 h-14 w-52 rounded-br-2xl'>2</div>
        <div className=' border-b-2 border-r-2 border-green-600 absolute bottom-0 left-0 h-10 w-52 rounded-br-2xl'>3</div>
        <div className=' border-l-2 border-t-2 border-green-600 absolute bottom-0 right-0 h-14 w-52 rounded-tl-2xl'>4</div>
      </div>
    </div>
  )
}

export default FormCurves
