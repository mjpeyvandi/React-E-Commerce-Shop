import React from 'react'
import { Search } from './Search'

export const ModalSearchMobile = ({close, mobile}) => {
  return (
    <div className='w-full h-full bg-gray-200 rounded-t-2xl '>
      <Search close={close} mobile={mobile}/>
    </div>
  )
}
