import React from 'react'
import { Link } from 'react-router-dom'

export const MenuFooter = ({style,titr, item1, item2, item3, item4, link1, link2, link3, link4}) => {
  return (
    <div className={`${style} flex flex-col justify-start md:justify-between items-start gap-2 md:gap-6`}>
        <span className='w-full font-satoshi font-semibold uppercase tracking-[0.2em] sm:text-base text-sm'>{titr}</span>
        <ul className="w-full h-full md:h-full flex flex-col justify-between items-start gap-3 md:gap-0 md:pt-2">
            <li className="w-full font-satoshi  text-gray-500">
                <Link className='text-sm sm:text-base' to={link1}>{item1}</Link>
            </li>
            <li className="w-full font-satoshi-l sm:font-satoshi  text-gray-500">
                <Link className='text-xs sm:text-base' to={link2}>{item2}</Link>
            </li>
            <li className="w-full font-satoshi-l sm:font-satoshi  text-gray-500">
                <Link className='text-xs sm:text-base' to={link3}>{item3}</Link>
            </li>
            <li className="w-full font-satoshi-l sm:font-satoshi  text-gray-500">
                <Link className='text-xs sm:text-base' to={link4}>{item4}</Link>
            </li>
        </ul>
    </div>
  )
}
