import React from 'react'

export const Button = ({w,h,onClick,children}) => {
  return (
    <button className={` ${w} ${h} h-12 rounded-3xl bg-black font-satoshi text-center text-white`} onClick={onClick}>
        {children}
    </button>
  )
}
