import React, { Component } from 'react';
import Button from './Button';

class EventForm extends Component {
  state = {
    title: null,
    location: null,
    startTime: null,
    startDate: null,
    endTime: null,
    endDate: null,
  }
  handleUserInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  hanleCreatNewEvent = () => {
    //date validation
    this.props.addEvent(this.state, this.props.hideForm);
  }
  render() {
    return (
      <div className="create_event_container">
        <div className="create_event_edit_form_container">
          <input
            placeholder="Title"
            name={"title"}
            className="input block_input"
            onChange={this.handleUserInput}
            />
          <input
            placeholder="Location"
            name={"location"}
            className="input block_input"
            onChange={this.handleUserInput}
            />
            <hr/>
          <div>

            <span>Starts: </span><input  type="date"  name={"startDate"} className="input inline_input" onChange={this.handleUserInput}/>
            <span>at</span><input  type="time"  name={"startTime"} className="input inline_input" onChange={this.handleUserInput}/>
          </div>
          <div >
            <span>Ends: </span><input  type="date"  name={"endDate"} className="input inline_input" onChange={this.handleUserInput}/>
            <span>at</span><input  type="time"  name={"endTime"} className="input inline_input" onChange={this.handleUserInput}/>
          </div>
            <div className="create_event_buttons_container">
              <Button label="Create" func={this.hanleCreatNewEvent} type="save"/>
              <Button label="Discard" func={this.props.hideForm} type="del"/>
            </div>
          </div>
        </div>
    );
  }

}

export default EventForm;
