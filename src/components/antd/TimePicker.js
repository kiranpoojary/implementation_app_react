import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import moment from "moment";
function TimePickers() {
  const [date, setDate] = useState();
  useEffect(() => {
    let endDate = "2022-12-31";
    let endTime = "06:10:02";
    const [yr, mnth, day] = endDate.split("-");
    const [hr, min, sec] = endTime.split(":");
    let d = new Date(yr, mnth, day, hr, min, sec);
    console.log(d.getTime());
    setDate(d.getTime());
  }, []);

  return (
    <div>
      <TimePicker
        defaultValue={moment(date)}
        value={moment(date)}
        onChange={(time, timeString) => {
          let dd = new Date(time);
          console.log(dd.getTime());
          console.log(time, timeString);
          setDate(time);
        }}
      />
    </div>
  );
}

export default TimePickers;
