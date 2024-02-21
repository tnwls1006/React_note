import React, { useState } from "react";
import NoteTitle from "./NoteTitle";
import "../css/Calendar.css";
import { addMonths, subMonths } from "date-fns";
import CHeader from "../calendar/cHeader";
import CDays from "../calendar/cDays";
import CCells from "../calendar/cCells";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());
  const navigate = useNavigate();

  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectDate(day);
  };
  const onMain = () => {
    navigate("/");
  };

  return (
    <div className="Note">
      <NoteTitle onClick={onMain} />
      <div className="calendar">
        <CHeader
          currentMonth={currentMonth}
          preMonth={preMonth}
          nextMonth={nextMonth}
        />
        <CDays />
        <CCells
          currentMonth={currentMonth}
          selectDate={selectDate}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
