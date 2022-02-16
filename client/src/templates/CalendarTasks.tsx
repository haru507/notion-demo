import React, { useCallback, useState } from 'react'
import FullCalendar, { EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import { InputModal } from '../components';
import { Task } from '../assets/ts/type';
import { bodyData } from '../assets/ts/data';
import { useDispatch } from 'react-redux';

const events: EventInput[] = bodyData;

function CalendarTasks() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (data?: Task | null | undefined): void => {
    if(data){
      if(data.id){
        setTitle(data.title);
        setStatus(data.status);
        setStart(new Date(data.start));
        setEnd(new Date(data.end));
        setDescription(data.description!!);
      }
      setTitle(data.title);
      setStatus(data.status);
      setStart(new Date(data.start));
      setEnd(new Date(data.end));
      setDescription(data.description!!);
    }else {
      setTitle("");
      setStatus("");
      setStart(new Date());
      setEnd(new Date());
      setDescription("");
    }
    setOpen(!open);
  };

  const [title, setTitle] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [start, setStart] = useState<Date>(new Date())
  const [end, setEnd] = useState<Date>(new Date())
  const [description, setDescription] = useState<string>("")

  const inputTaskName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  },[setTitle]);

  const inputStartedAt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(new Date(e.target.value))
  },[setStart]);

  const inputEndedAt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(new Date(e.target.value))
  },[setEnd]);

  const inputDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  },[setDescription]);

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          }}
          customButtons={{
            new: {
              text: 'new',
              click: () => handleOpen(),
            },
          }}
          locales={allLocales}
          locale="ja"
          events={events}
          nowIndicator
          dateClick={(e) => handleOpen({id: undefined, title: "", status: "", description: "", start: new Date(e.dateStr), end: new Date(e.dateStr)})}
          eventClick={(e) => handleOpen({id: e.event.id, title: e.event.title, status: e.event.extendedProps.status, description: e.event.extendedProps.description, start: new Date(e.event.start!!), end: new Date(e.event.end ? e.event.end!! : e.event.start!!)})}
        />
      </div>
      <InputModal
        open={open}
        handleOpen={handleOpen}
        value={{title, status, start, end, description}}
        onChange={{inputTaskName, setStatus, inputStartedAt, inputEndedAt, inputDescription}}
      />
    </>
  );
}

export default CalendarTasks;