import React from 'react'

import { FilterSection } from '../components/products/FilterSection';

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";


export const Products = () => {
  return (
    <div className='w-full h-[80rem]'>
      <div className="container mx-auto h-full border-t-[0.2px] border-t-gray-300">
        <div className="h-full w-full flex flex-col justify-start items-center">
          {/* Route section */}
          <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2">
            <p className='text-gray-500'>{`Home`}</p> <MdKeyboardArrowRight className='size-5 opacity-45' /> <p>Products</p>
          </div>

          {/* content Section */}
          <div className="w-full h-full flex flex-row justify-between items-start gap-5 bg-green-300">
            {/*filter section*/}
            <div className="w-[23%] h-[1140px] bg-yellow-100">
              <FilterSection/>
            </div>
            {/*products section*/}
            <div className="w-[77%] h-full bg-yellow-300 flex flex-col justify-start items-center">
              {/*sorting section*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center bg-green-100">
                <p className="font-satoshi-b text-3xl">Casual</p>
                <div className="w-2/5 flex flex-row justify-between items-center">
                  <p className="font-satoshi-l text-gray-500">{`Showing 1-10 of 100 Products`}</p>
                  <p className="font-satoshi-l text-gray-500">{`Sort by: Most Popular`}</p>
                </div>
              </div>
              {/*products*/}
              <div className="w-full h-[80%] border-t-[0.2px] border-b-gray-300 bg-green-200"></div>
              {/*page navigation*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center bg-green-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
