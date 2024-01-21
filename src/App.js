import { useState } from "react";
import logo from "./logo.svg";
import DateRangePicker from "./components/daterange";
import "./App.css";

function App() {
  const [dates, setDates] = useState([]);
  const [weekends, setWeekends] = useState([]);

  const formatDate = (date) => {
    if (!date) return "";
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const handleDates = (startDate, endDate) => {
    setDates([startDate, endDate]);
    console.log(`Ranges are below:`);
    console.log(`${formatDate(startDate)} - ${formatDate(endDate)}`);
  };

  const handleWeekends = (weekends) => {
    setWeekends(weekends);
    console.log(`Weekends are below:`);
    console.log(weekends.map(formatDate));
  };

  return (
    <div className="App">
      <div className="dates">
        {dates.length && <p>From: {formatDate(dates[0])}</p>}
        {dates.length && <p>To: {formatDate(dates[1])}</p>}
      </div>
      <div className="weekends">
        <label>Weekends: </label>
        {weekends.map((date, i) => (
          <span>{formatDate(date)}, </span>
        ))}
      </div>
      <h3>Please take a look at console log whenever changes dates</h3>
      <DateRangePicker
        onReceiveDates={handleDates}
        onReceiveWeekends={handleWeekends}
      />
    </div>
  );
}

export default App;
