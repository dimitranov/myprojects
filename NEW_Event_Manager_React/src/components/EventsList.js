import React, { Component } from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

const EventsList = ({data,removeEvent,updateEvent}) => (
    <div className="events_list_container">
       {data?data.map((event,index) => {
           return (
             <Event key={index} removeEvent={removeEvent} event={event} updateEvent={updateEvent}/>
           )
         }):null}
   </div>
)


EventsList.propTypes = {
  data: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired
};

export default EventsList;
