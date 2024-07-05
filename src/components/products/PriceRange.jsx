import React, { useState, useEffect } from "react";
import "./PriceRange.css";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);
  const minGap = 130;
  const sliderMinValue = 0;
  const sliderMaxValue = 500;

  useEffect(() => {
    setArea();
  // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, [minValue, maxValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setArea = () => {
    const range = document.querySelector(".slider-track");
    const minTooltip = document.querySelector(".min-tooltip");
    const maxTooltip = document.querySelector(".max-tooltip");

    range.style.left = `${
      ((minValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    range.style.right = `${
      100 -
      ((maxValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    minTooltip.style.left = `${(minValue / sliderMaxValue) * 100}%`;
    maxTooltip.style.right = `${100 - (maxValue / sliderMaxValue) * 100}%`;
  };

  const handleMinInputChange = (e) => {
    let minPrice = parseInt(e.target.value);
    if (maxValue - minPrice >= minGap && minPrice >= sliderMinValue) {
      setMinValue(minPrice);
    }
  };

  const handleMaxInputChange = (e) => {
    let maxPrice = parseInt(e.target.value);
    if (maxPrice - minValue >= minGap && maxPrice <= sliderMaxValue) {
      setMaxValue(maxPrice);
    }
  };

  return (
    <div className="w-full">
      <div className="range-slider relative w-full h-1.5 bg-gray-300">
        <div className="slider-track absolute h-full bg-black"></div>
        <input
          type="range"
          className="absolute w-full top-1/2 transform -translate-y-1/2 appearance-none pointer-events-none"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minValue}
          onChange={(e) => handleMinInputChange(e)}
        />
        <input
          type="range"
          className="absolute w-full top-1/2 transform -translate-y-1/2 appearance-none pointer-events-none"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxValue}
          onChange={(e) => handleMaxInputChange(e)}
        />
        <div className="min-tooltip absolute my-5 font-satoshi">${minValue}</div>
        <div className="max-tooltip absolute my-5 font-satoshi">${maxValue}</div>
      </div>
    </div>
  );
};

export default PriceRange;
