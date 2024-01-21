import React, { useState, useEffect } from "react";
import PickModal from "./modal";
import { MonthsOfYear, PreDefinedRanges } from "./const";
import "./style.css";

const DatePicker = ({ selectedDate, setSelectedDate, onPredefined }) => {
  const [selectedDateString, setString] = useState("");
  const [modalOpen, setModal] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const handleDateChange = (currentDate) => {
    setSelectedDate(currentDate);
  };

  const handleFocus = () => {
    // alert("Hello");
    setModal(true);
  };

  const createCalendar = () => {
    const startDateObj = new Date(year, month, 1);
    const endDateObj = new Date(year, month + 1, 0);
    const daysInMonth = endDateObj.getDate();
    const offset = startDateObj.getDay();
    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < offset) || dayCounter > daysInMonth) {
          week.push(<td key={`${i}-${j}`} />);
        } else {
          const currentDate = new Date(year, month, dayCounter);
          const isBusinessDay =
            currentDate.getDay() !== 0 && currentDate.getDay() !== 6;
          const isHighlighted = isBusinessDay;
          week.push(
            <td
              key={`${i}-${j}`}
              onClick={() => handleDateChange(currentDate)}
              className={isHighlighted ? "highlighted" : ""}
            >
              {dayCounter}
            </td>
          );
          dayCounter++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
      if (dayCounter > daysInMonth) {
        break;
      }
    }
    return calendar;
  };

  const onPrevMonth = () => {
    console.log(month);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      return;
    }
    setMonth(Math.max(0, month - 1));
  };

  const onPrevYear = () => {
    setYear(year - 1);
  };

  const onNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      return;
    }
    setMonth(Math.min(11, month + 1));
  };

  const onNextYear = () => {
    setYear(year + 1);
  };

  const handlePredefined = (index) => {
    console.log("Hello", index);
    onPredefined(index);
    setModal(false);
  };

  useEffect(() => {
    if (!selectedDate) return;
    setString(
      `${
        selectedDate.getMonth() + 1
      }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`
    );
    setModal(false);
  }, [selectedDate]);

  return (
    <div onMouseLeave={() => setModal(false)}>
      <input
        type="text"
        id="datepicker"
        readOnly
        value={selectedDateString}
        onClick={handleFocus}
      />
      <div
        className="date-picker"
        style={{ display: `${modalOpen ? "block" : "none"}` }}
      >
        <div className="picker-header">
          <span onClick={onPrevMonth}>{"<"}</span>
          <span onClick={onPrevYear} style={{ marginLeft: 20 }}>
            {"<<"}
          </span>
          <span className="current-month">{`${MonthsOfYear[month]}, ${year}`}</span>
          <span onClick={onNextYear} style={{ marginRight: 20 }}>
            {">>"}
          </span>
          <span onClick={onNextMonth}>{">"}</span>
        </div>
        <PickModal dates={createCalendar()} />
        <div className="predefined">
          {PreDefinedRanges.map((range, i) => (
            <div key={`predefined${i}`}>
              <button onClick={() => handlePredefined(i)}>{range}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
