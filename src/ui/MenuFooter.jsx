import React from 'react'
import { Link } from 'react-router-dom'

export const MenuFooter = ({titr, item1, item2, item3, item4, link1, link2, link3, link4}) => {
  return (
    <div className=" h-full flex flex-col justify-between items-start gap-6">
        <span className='w-full font-satoshi font-semibold uppercase tracking-[0.2em]'>{titr}</span>
        <ul className="h-full flex flex-col justify-between items-start pt-2">
            <li className="font-satoshi text-gray-500">
                <Link to={link1}>{item1}</Link>
            </li>
            <li className="font-satoshi text-gray-500">
                <Link to={link2}>{item2}</Link>
            </li>
            <li className="font-satoshi text-gray-500">
                <Link to={link3}>{item3}</Link>
            </li>
            <li className="font-satoshi text-gray-500">
                <Link to={link4}>{item4}</Link>
            </li>
        </ul>
    </div>
  )
}
