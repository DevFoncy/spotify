import React, { useState, useRef, useEffect } from "react";
import "./index.css"

interface FixedRangeProps{
   values: Array<number>,
    start: number,
    end: number,
  }

const FixedRange:React.FC<FixedRangeProps> = ({ values, start, end }) => {
  const [startValue, setStartValue] = useState(start);
  const [endValue, setEndValue] = useState(end);
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

  useEffect(() => {
    setStartValue(start)
    setEndValue(end)
  },[start,end])

  const handleMouseMove = (e:any) => {
    if (startDragging || endDragging) {
      const rangeWidth = rangeRef?.current?.offsetWidth || 1;
      const rangeLeft = rangeRef?.current?.getBoundingClientRect().left || 1;
      const mouseX = e.clientX - rangeLeft;
      const percent = (mouseX / rangeWidth) * 100;
      const value = getValueByPercent(percent);

      if (startDragging) {
        if (value > endValue) {
          setStartValue(endValue);
        } else {
          setStartValue(value);
        }
      } else if (endDragging) {
        if (value < startValue) {
          setEndValue(startValue);
        } else {
          setEndValue(value);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setStartDragging(false);
    setEndDragging(false);
  };

  const getValueByPercent = (percent:number) => {
    const valueIndex = Math.round((percent / 100) * (values.length - 1));
    return values[valueIndex];
  };

  return (
    <div
      className="fixed-range"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={rangeRef}
    >
      <div
        className="handle start-handle"
        onMouseDown={handleMouseDown("start")}
        style={{
          left: `${((values.indexOf(startValue) * 100) / (values.length - 1))}%`,
        }}
      />
      <div
        className="handle end-handle"
        onMouseDown={handleMouseDown("end")}
        style={{
          left: `${((values.indexOf(endValue) * 100) / (values.length - 1))}%`,
        }}
      />
      <div
        className="range-bar"
        style={{
          left: `${((values.indexOf(startValue) * 100) / (values.length - 1))}%`,
          width: `${((values.indexOf(endValue) - values.indexOf(startValue)) * 100) / (values.length - 1) + 1}%`,
        }}
      />
        <div className="values" data-testid="values">
            {values.map((value:any) => (
            <div
                className={`value ${value === startValue || value === endValue ? "active" : ""}`}
                key={value}
                style={{
                left: `${((values.indexOf(value) * 100) / (values.length - 1))}%`,
                }}
            >
                {value}
            </div>
            ))}
        </div>
    </div>
  );
};

export default FixedRange;
