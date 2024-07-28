import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import { useState } from "react";
import TopBar from "./TopBar";
import "./../asset/styles/weekCalender.css";

export default function Calendar({ currentView = 'timeGridDay', onViewChange }) {
  console.log('Calendar: Received currentView:', currentView);
  const calendarRef = useRef(null);
  const [key, setKey] = useState(0);

  function renderDayHeader(args) {
    return (
      <div className="custom-day-header">
        <div className="day-of-week">
          {args.date
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase()}
        </div>
        <div className="day-number">{args.date.getDate()}</div>
      </div>
    );
  }

  function renderSlotLabel(args) {
    if (args.date.getHours() === 6) {
      // Assuming 6 AM is your first time slot
      return (
        <div className="custom-slot-label">
          <span className="gmt-label">GMT +1</span>
        </div>
      );
    }
    return <span className="time-label">{args.text}</span>;
  }


  useEffect(() => {
    console.log('Calendar: Current view:', currentView);
    if (calendarRef.current && currentView) {
      const calendarApi = calendarRef.current.getApi();
      console.log('Calendar: Attempting to change view to:', currentView);
      calendarApi.changeView(currentView);
      setKey(prevKey => prevKey + 1); // Force re-render
    }
  }, [currentView]);

  const handleDatesSet = (arg) => {
    console.log('Calendar: handleDatesSet called with view:', arg.view.type);
    if (onViewChange && typeof onViewChange === 'function' && arg.view.type !== currentView) {
      onViewChange(arg.view.type);
    }
  };

  return (
    <div className="calendar-container mt-5 w-full relative">
  
      <div className="weekday_lines flex absolute w-full top-20 h-full z-40 ">
        <hr className="h-full border border-r-0 border-white"/>
        <hr className="h-full border border-r-0"/>
        <hr className="h-full border border-r-0"/>
        <hr className="h-full border border-r-0"/>
        <hr className="h-full border border-r-0"/>
        <hr className="h-full border border-r-0"/>
        <hr className="h-full border border-r-0"/>

      </div>



      <FullCalendar
       key={key} 
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
        }}
        views={{
          timeGridDay: { buttonText: "day" },
          timeGridWeek: { buttonText: "week" },
          dayGridMonth: { buttonText: "month" },
          dayGridYear: { buttonText: "year" },
        }}
        slotDuration={"01:00:00"}
        slotLabelInterval={"01:00"}
        slotMinTime="06:00:00"
        slotMaxTime="18:00:00"
        height="auto"
        allDaySlot={false}
        nowIndicator={true}
        dayHeaderContent={renderDayHeader}
        slotLabelContent={renderSlotLabel}
        datesSet={handleDatesSet}
      />
    </div>
  );
}
