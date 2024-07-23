import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function MiniCalender(){

  const [value, setValue] = useState(new Date())

  const changeDate = (newDate) => {
    setValue(newDate);
  }

  return(
    <>
    <Calendar onChange={changeDate} value={value}/>
    </>
  )
}