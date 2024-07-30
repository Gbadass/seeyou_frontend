import daygrid from "@fullcalendar/daygrid";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../asset/styles/customCalender.css";
import {arrowdown2Png} from './../assets'

export default function MiniCalender() {
  const [value, setValue] = useState(new Date());

  const changeDate = (newDate) => {
    setValue(newDate);
  };

  const formatShortWeekday = (locale, date) => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    return weekdays[(date.getDay() + 6) % 7]
  };

  return (
    <>
      <Calendar
        onChange={changeDate}
        value={value}
        formatShortWeekday={formatShortWeekday}
        view="month"
        showNavigation={true}
        className='custom-calendar'
        prevLabel={<img src={arrowdown2Png} alt="Previous" className="custom-arrow" />}
        nextLabel={<img src={arrowdown2Png} alt="Next" className="transform rotate-180  custom-arrow flex items-end" />}
      />
    </>
  );
}
