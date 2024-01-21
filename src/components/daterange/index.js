import React, { useState, useEffect } from "react";
import { dateCompare, getPredefined } from "../datepicker/const";
import DatePicker from "../datepicker";
import "./style.css";

const DateRangePicker = ({ onReceiveDates, onReceiveWeekends }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const calculateWeekendDays = (stDate, edDate) => {
    const fromDate = new Date(stDate);
    const toDate = new Date(edDate);
    const weekends = [];

    while (dateCompare(fromDate, toDate)) {
      fromDate.setDate(fromDate.getDate() + 1);
      if (fromDate.getDay() === 0 || fromDate.getDay() === 6) {
        weekends.push(new Date(fromDate));
      }
    }

    return weekends;
  };

  const handlePredefined = (index) => {
    const [stDate, edDate] = getPredefined(index);
    console.log(stDate, edDate);
    if (stDate && edDate) {
      setStartDate(stDate);
      setEndDate(edDate);
    }
  };

  useEffect(() => {
    if (startDate.getTime() > endDate.getTime()) {
      onReceiveDates(startDate, startDate);
      onReceiveWeekends(calculateWeekendDays(startDate, startDate));
      setEndDate(startDate);
      alert("Please select end date after start date!!!");
      return;
    }
    onReceiveDates(startDate, endDate);
    onReceiveWeekends(calculateWeekendDays(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <div className="date-range-picker">
      <h3>Select times</h3>
      <div className="date-pickers">
        <DatePicker
          selectedDate={startDate}
          setSelectedDate={setStartDate}
          onPredefined={handlePredefined}
        />
        <DatePicker
          selectedDate={endDate}
          setSelectedDate={setEndDate}
          onPredefined={handlePredefined}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
