import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import { useState } from "react";
import TopBar from "./TopBar";
import "./../asset/styles/weekCalender.css";

export default function Calendar({
  currentView = "timeGridDay",
  onViewChange,
}) {
  console.log("Calendar: Received currentView:", currentView);
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
    const hour = args.date.getHours();
    const minutes = args.date.getMinutes();

    if (hour === 5 && minutes === 0) {
      return (
        <div className="custom-slot-label">
          <span className="gmt-label">GMT +1</span>
          {/* <span className="time-label">{args.text}</span> */}
        </div>
      );
    }

    return <span className="time-label">{args.text}</span>;
  }

  useEffect(() => {}, [currentView]);

  const handleDatesSet = (arg) => {};

  return (
    <div className="calendar-container mt-5 w-full relative">
      <div className="weekday_lines flex absolute w-full top-20 h-full z-40">
        <div className="border border-t-0 width80px border-l-0  text-center text-sm">SUN 14</div>
        <div className="border border-t-0 width80px border-l-0 text-center text-sm">SUN 14</div>
        <div className="border border-t-0 width80px  border-l-0 text-center text-sm">MON 14</div>
        <div className="border border-t-0 width80px border-l-0 text-center text-sm">TUE 14</div>
        <div className="border border-t-0 width80px border-l-0 text-center text-sm">WEN 14</div>
        <div className="border border-t-0 width80px border-l-0 text-center text-sm">THU 14</div>
        <div className="border border-t-0 width80px border-l-0 text-center text-sm">FRI 14</div>
      </div>

      <FullCalendar
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
        slotDuration="01:00:00"
        slotLabelInterval="01:00"
        slotMinTime="05:00:00"
        slotMaxTime="19:00:00"
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
