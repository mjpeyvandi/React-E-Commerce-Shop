import React from "react";

export default function Color({ value, onClick, checked, disabled }) {
  let bgColor, borderColor, shadow;

  if (value === "white" || value === "black") {
    bgColor = `bg-${value}`;
    shadow = `shadow-${value}-800`;
    borderColor = `border-gray-500`;
  } else if (value === "red") {
    bgColor = "bg-red-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-red-700";
  } else if (value === "green") {
    bgColor = "bg-green-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-green-700";
  } else if (value === "blue") {
    bgColor = "bg-blue-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-blue-700";
  } else if (value === "yellow") {
    bgColor = "bg-yellow-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-yellow-700";
  } else if (value === "orange") {
    bgColor = "bg-orange-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-orange-700";
  } else if (value === "sky") {
    bgColor = "bg-sky-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-sky-700";
  } else if (value === "purple") {
    bgColor = "bg-purple-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-purple-700";
  } else if (value === "pink") {
    bgColor = "bg-pink-500";
    shadow = `shadow-${value}-800`;
    borderColor = "border-pink-700";
  }

  return (
    <div
      className={`size-7 xl:size-9 rounded-full ${bgColor} border-[0.2px] ${checked?.includes(value) ? `border-gray-950 border-[2.5px]` : borderColor} 
       cursor-pointer hover:transition-all hover:${shadow} hover:shadow-xl`}
       onClick={onClick}
    ></div>
  );
}
