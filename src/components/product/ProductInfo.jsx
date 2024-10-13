import React from 'react'

import { MultipleImage } from './MultipleImage'

export const ProductInfo = () => {
  return (
    <div className='w-full h-full absolute flex flex-row justify-between items-start gap-2'>
        <div className="w-1/2 h-full bg-teal-200">
            <MultipleImage/>
        </div>
        <div className="w-1/2 h-full bg-teal-200"></div>
    </div>
  )
}
