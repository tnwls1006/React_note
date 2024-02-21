import React from "react";

const CDays = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="days">
      {days.map((day, index) => (
        <div className="col" key={index}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default CDays;
