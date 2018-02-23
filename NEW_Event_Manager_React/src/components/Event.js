import React, { Component } from 'react';
import SingleEvent from './SingleEvent';
import SingleEventEditForm from './SingleEventEditForm';

class Event extends Component {
  state = {
    edit: false,
    title: this.props.event.title,
    location:  this.props.event.location,
    startTime:  this.props.event.startTime,
    startDate:  this.props.event.startDate,
    endTime:  this.props.event.endTime,
    endDate:  this.props.event.endDate,
  }
  handleUserInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  hanleCreatNewEvent = () => {
      this.props.addEvent(this.state);
  }
  handleEditClick = () => {
    this.setState({ edit: !this.state.edit })
  }
  handleEditEvent = () => {
    const {event  } = this.props;
    this.props.updateEvent(
      event.id_key,
      {
        id_key: event.id_key,
        title: this.state.title,
        location:  this.state.location,
        startTime:  this.state.startTime,
        startDate:  this.state.startDate,
        endTime:  this.state.endTime,
        endDate:  this.state.endDate
      },
      this.handleEditClick);
    }

  render(){
    const { removeEvent, event  } = this.props;
    return ( !this.state.edit ?
      <SingleEvent event={event} handleEditClick={this.handleEditClick} removeEvent={removeEvent}/> :
      <SingleEventEditForm
        {...this.state}
        event={event}
        handleEditClick={this.handleEditClick}
        handleUserInput={this.handleUserInput}
        updateEvent={this.handleEditEvent}
      />
    )
  }
}

export default Event;
