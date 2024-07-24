import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline' // a plugin!
import './../asset/styles/calender.css'

export default function Calendar() {

  function renderDayHeader(args) {
    return (
      <div className="custom-day-header">
        <div className='day-of-week' >{args.date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</div>
        <div className="day-number">{args.date.getDate()}</div>
      </div>
    )
  }

  function renderSlotLabel(args) {
    if (args.date.getHours() === 6) { // Assuming 6 AM is your first time slot
      return (
        <div className="custom-slot-label">
          <span className="gmt-label">GMT +1</span>
        </div>
      )
    }
    return <span className="time-label">{args.text}</span>
  }

  return (
    <div className='calendar-container mt-5'>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        slotDuration={'01:00:00'}
        slotLabelInterval={'01:00'}
        slotMinTime="06:00:00"
        slotMaxTime="18:00:00"
        height="auto"
        allDaySlot={false}
        nowIndicator={true}
        dayHeaderContent={renderDayHeader}
        slotLabelContent={renderSlotLabel}
      />
    </div>
  )
}


