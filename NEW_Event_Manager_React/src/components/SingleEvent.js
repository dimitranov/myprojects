import React from 'react';
import Button from './Button';

const  beautifyDate = (dataString) => { // 31/12/2018
  let tempString = dataString;
  let month = '';
  switch (tempString.substring(5,7)) {
    case '01': month = 'Jan'; break;
    case '02': month = 'Feb'; break;
    case '03': month = 'Mar'; break;
    case '04': month = 'Apr'; break;
    case '05': month = 'May'; break;
    case '06': month = 'Jun'; break;
    case '07': month = 'Jul'; break;
    case '08': month = 'Aug'; break;
    case '09': month = 'Sep'; break;
    case '10': month = 'Oct'; break;
    case '11': month = 'Nov'; break;
    case '12': month = 'Dec'; break;
    default: return true;
  }
  return `${tempString.substring(8)} ${month} ${tempString.substring(0,4)}`;
}

const SingleEvent = ({event,handleEditClick,removeEvent}) => (
  <div className="event_container">
    <div className="event_buttons_container">
      <Button func={handleEditClick} label="Edit" type="edit" />
      <Button  label="Delete" func={()=>removeEvent(event.id_key)} type="del"/>
    </div>
    <p>{event.title}</p>
    <p>{event.location}</p>
    <hr/>
    <p>Starts: <span>{beautifyDate(event.startDate)}</span> at <span>{event.startTime}</span></p>
    <p>Ends: <span>{beautifyDate(event.endDate)}</span> at <span>{event.endTime}</span></p>
  </div>
)

export default SingleEvent;
