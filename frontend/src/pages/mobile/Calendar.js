import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar library
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Import the DashboardHeader
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting with Client', start: '2025-01-15T10:00:00', end: '2025-01-15T11:00:00' },
    { title: 'Product Installation', start: '2025-01-16T14:00:00', end: '2025-01-16T15:30:00' },
    { title: 'Team Call', start: '2025-01-17T09:00:00', end: '2025-01-17T10:00:00' },
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter Event Title:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: info.dateStr,
          end: info.dateStr, // Add end date for same-day events
        },
      ]);
    }
  };

  const handleEventClick = (info) => {
    if (window.confirm(`Delete event: "${info.event.title}"?`)) {
      info.event.remove(); // Removes the event from the calendar
      setEvents(events.filter((event) => event.title !== info.event.title));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Smart Calendar</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            headerToolbar={{
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            editable={true}
            selectable={true}
            selectMirror={true} // Helps in visually selecting multiple dates
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
