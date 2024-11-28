import React, { useEffect, useState } from "react";

import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";
import { IoArrowBack } from "@react-icons/all-files/io5/IoArrowBack";

import { getReviews } from "../../services/getReviews";
import { CardReview } from "./CardReview";

export const Slider = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    getReviews().then((data) => setReviews(data));
  }, []);

  function handleBackItem() {
    if (currentIndex > 0) {
      if (window.screen.width > 768) {
        setIndex((currentIndex) => currentIndex - 3);
      } else {
        setIndex((currentIndex) => currentIndex - 1);
      }
    }
  }

  function handleNextItem() {
    if (currentIndex < reviews.length - 3 && window.screen.width > 768) {
      setIndex((currentIndex) => currentIndex + 3);
    } else if (currentIndex < reviews.length - 1 && window.screen.width < 768) {
      setIndex((currentIndex) => currentIndex + 1);
    }
  }

  return (
    <div className="container mx-auto h-full flex flex-col justify-start md:justify-between items-center gap-2 md:gap-10">
      <div className="w-full h-1/6 flex flex-row justify-between items-center">
        <h2 className="font-titr  text-xl sm:text-3xl md:text-5xl">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex flex-row justify-between items-center gap-3">
          <IoArrowBack
            className="size-6 cursor-pointer"
            onClick={handleBackItem}
          />
          <IoArrowForward
            className="size-6 cursor-pointer"
            onClick={handleNextItem}
          />
        </div>
      </div>
      <div className="h-5/6 w-full grid grid-cols-1 md:flex flex-row justify-start items-center md:gap-5 overflow-hidden">
        {window.screen.width > 768 ?
        reviews.slice(currentIndex, currentIndex + 3).map((item) => (
          <CardReview
            rate={item.rate}
            name={item.name}
            comment={item.comment}
            key={item}
          />
        )) : 
        reviews.slice(currentIndex, currentIndex + 1).map((item) => (
          <CardReview
            rate={item.rate}
            name={item.name}
            comment={item.comment}
            key={item}
          />
        ))
        }
      </div>
    </div>
  );
};
