import React from 'react'

export const PayCard = ({img}) => {
  return (
    <div className='w-12 h-7 flex flex-row justify-center items-center bg-white shadow-md rounded-md border-[1px] border-stone-200'>
        <img src={img} alt="payment" className=''/>
    </div>
  )
}
