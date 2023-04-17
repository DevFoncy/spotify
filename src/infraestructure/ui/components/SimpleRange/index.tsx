import React, { useState, useRef } from "react";

import "./index.css"

interface SimpleRangeProps{
  min: number,
  max: number,
}
const SimpleRange:React.FC<SimpleRangeProps> = ({ min , max }) => {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);
  const [startDragging, setStartDragging] = useState(false);
  const [endDragging, setEndDragging] = useState(false);
  const rangeRef = useRef<HTMLDivElement>(null);


  const handleMouseDown = (type : string) => () => {
    if (type === "start") {
      setStartDragging(true);
    } else {
      setEndDragging(true);
    }
  };

  const handleMouseMove = (e:any) => {
    if (startDragging || endDragging) {
      const rangeWidth = rangeRef?.current?.offsetWidth || 1;
      const rangeLeft = rangeRef?.current?.getBoundingClientRect().left  || 1;
      const mouseX = e.clientX - rangeLeft;
      const percent = (mouseX / rangeWidth) * 100;

      if (startDragging) {
        if (percent < 0) {
          setStartValue(min);
        } else if (percent > 100) {
          setStartValue(max);
        } else if (percent >= endValue) {
          setStartValue(endValue - 1);
        } else {
          console.log("1er if");
          setStartValue(Math.round((percent / 100) * (max - min) + min));
        }
      } else if (endDragging) {
        if (percent < 0) {
          setEndValue(min);
        } else if (percent > 100) {
          setEndValue(max);
        } else if (percent <= startValue) {
          setEndValue(startValue + 1);
        } else {
          console.log("2do if");
          setEndValue(Math.round((percent / 100) * (max - min) + min));
        }
      }
    }
  };

  const handleMouseUp = () => {
    setStartDragging(false);
    setEndDragging(false);
  };

  return (
    <div className="simple-range-container">
      <p className="value-start" data-testid="value-start">{startValue}€</p>
      <div
        className="simple-range"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={rangeRef}
      > 
        <div
          className="handle start-handle"
          data-testid="start-handle"
          onMouseDown={handleMouseDown("start")}
          style={{
            left: `${((startValue - min) / (max - min)) * 100}%`,
          }}
        />
        <div
          className="handle end-handle"
          onMouseDown={handleMouseDown("end")}
          style={{
            left: `${((endValue - min) / (max - min)) * 100}%`,
          }}
        />
        <div
          className="range-bar"
          style={{
            left: `${((startValue - min) / (max - min)) * 100}%`,
            width: `${((endValue - startValue) / (max - min)) * 100}%`,
          }}
        />
      </div>
      <p className="value-end"  data-testid="value-end">{endValue}€</p>     
    </div>
  )
}

export default SimpleRange;