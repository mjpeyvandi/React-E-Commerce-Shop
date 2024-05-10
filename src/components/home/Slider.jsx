import React, { useEffect, useState } from "react";

import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";
import { IoArrowBack } from "@react-icons/all-files/io5/IoArrowBack";

import { getReviews } from "../../services/getReviews";
import { CardReview } from "./CardReview";

export const Slider = () => {
    const [reviews, setReviews] = useState([])
    const [currentIndex, setIndex] = useState(0)
    console.log(currentIndex)
    useEffect(()=>{
        getReviews().then((data)=> setReviews(data))
    },[])

    function handleBackItem(){
      if(currentIndex > 0){
        setIndex(currentIndex => currentIndex - 3)
      }
    }

    function handleNextItem(){
      if(currentIndex < reviews.length - 3 ){
        setIndex(currentIndex => currentIndex + 3)
      }
    }

  return (
    <div className="container mx-auto h-full flex flex-col justify-between items-center gap-10">
      <div className="w-full h-1/6 flex flex-row justify-between items-center">
        <h2 className="font-titr text-5xl">OUR HAPPY CUSTOMERS</h2>
        <div className="flex flex-row justify-between items-center gap-3">
          <IoArrowBack className="size-6 cursor-pointer" onClick={handleBackItem} />
          <IoArrowForward className="size-6 cursor-pointer"  onClick={handleNextItem}/>
        </div>
      </div>
      <div className="h-5/6 w-full flex flex-row justify-start items-center gap-5 overflow-hidden">
        {
          reviews.slice(currentIndex, currentIndex + 3)
          .map((item)=>(
            <CardReview rate={item.rate} name={item.name} comment={item.comment}/>
          ))
        }
      </div>
    </div>
  );
};
