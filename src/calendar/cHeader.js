import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { format } from "date-fns";

const CHeader = ({ currentMonth, preMonth, nextMonth }) => {
  return (
    <div className="header">
      <div className="header-start">
        <span className="text">
          {format(currentMonth, "yyyy ")}
          <span className="text month">{format(currentMonth, "M")}월</span>
        </span>
      </div>
      <div className="header-end">
        <BsArrowLeftCircle onClick={preMonth} className="Icons" size="25" />
        <BsArrowRightCircle onClick={nextMonth} className="Icons" size="25" />
      </div>
    </div>
  );
};

export default CHeader;
