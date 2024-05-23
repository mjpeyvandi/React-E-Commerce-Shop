import React from 'react'

import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

export const Input = ({width, height,bg,type,placeholder}) => {
  return (
    <div className={`${width} ${height} ${bg} space-x-2 flex flex-row justify-start
     items-center rounded-full box-border p-3 font-satoshi`}>
      <AiOutlineMail className="text-gray-500 m-1 size-5" />
      <input
        type={type}
        className={`h-full w-full rounded-2xl outline-none
         ${bg} items-center `}
         placeholder={placeholder}
      />
    </div>
  )
}
