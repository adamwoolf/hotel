import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import 'moment/locale/en-gb';


const InputBar = ({
  modify,
  adults,
  selectAdults,
  children,
  selectChildren,
  startDate,
  setStart,
  setEnd,
  endDate,
}) => {
  const datePickerProps = {
    placeholder: startDate,
  };

  const endDatePickerProps = {
    placeholder: endDate,
  };

  return (
    <div className="inputs-container">
      <div className="inputs-bar">
        <Datetime
          inputProps={datePickerProps}
          timeFormat={false}
          onChange={(date) => setStart(moment(date).format("DD-MM-YYYY"))}
        />
        <Datetime

          inputProps={endDatePickerProps}
          timeFormat={false}
          onChange={(date) => setEnd(moment(date).format("DD-MM-YYYY"))}
        />
        <select className="form-control" onChange={selectAdults}>
          {adults.map((person, i) => (
            <option value={i}>{person}</option>
          ))}
        </select>
        <select className="form-control" onChange={selectChildren}>
          {children.map((person, i) => (
            <option value={i}>{person}</option>
          ))}
        </select>
        <button type="button" onClick={modify}>
          Modify
        </button>
      </div>
    </div>
  );
};

export default InputBar;
