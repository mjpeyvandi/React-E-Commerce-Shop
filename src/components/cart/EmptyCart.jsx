import React from 'react'

import { Button } from '../../ui/Button'
import { IoIosArrowRoundForward } from '@react-icons/all-files/io/IoIosArrowRoundForward'

import empty from "../../assets/images/empty.png"
import { Link } from 'react-router-dom'


export const EmptyCart = () => {
  return (
    <div className='w-full h-auto col-span-full border-[0.2px] border-gray-300 rounded-2xl p-2'>
        <div className="w-full sm:w-2/6 h-full flex flex-col justify-center items-center mx-auto gap-5 py-4">
            <img src={empty} className='size-32 xs:size-36' alt="empty" />
            <p className="font-titr lowercase text-nowrap text-xl sm:text-2xl md:text-3xl">Your cart is empty</p>
            <Link to={'/products'} className='w-full'>
            <Button
            w={
              "w-full flex flex-row justify-center items-center gap-2 align-baseline"
            }
          >
            View Products <IoIosArrowRoundForward className="size-8" />{" "}
          </Button>
            </Link>
            

        </div>
    </div>
  )
}
