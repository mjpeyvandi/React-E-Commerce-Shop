import React from "react";

export default function Color({ value }) {
  if (value === "white" || value === "black") {
    return (
      <div
        className={`size-9 rounded-full bg-${value} border-[0.2px] border-${value} cursor-pointer`}
      ></div>
    );
  }
  else{
    return <div className={`size-9 rounded-full bg-${value}-500 border-[0.2px] border-${value}-700 cursor-pointer`}></div>
  }
}
