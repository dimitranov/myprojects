import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SingleEventEditForm = (props) => (
  <div className="event_container">
    <div className="event_edit_form_container">
      <input
        className="input block_input"
        placeholder="Add title"
        name={"title"}
        onChange={props.handleUserInput}
        defaultValue={props.title}
      />
      <input
        className="input block_input"
        placeholder="Add location"
        name={"location"}
        onChange={props.handleUserInput}
        defaultValue={props.location}
        />
        <hr/>
      <div>
        <span>Starts: </span><input  type="date" className="input inline_input" name={"startDate"} onChange={props.handleUserInput} defaultValue={props.startDate}  />
        <span>at</span><input  type="time" className="input inline_input" name={"startTime"} onChange={props.handleUserInput} defaultValue={props.startTime} />
      </div>
      <div >
        <span>Ends: </span><input  type="date" className="input inline_input" name={"endDate"} onChange={props.handleUserInput} defaultValue={props.endDate} />
        <span>at</span><input  type="time" className="input inline_input" name={"endTime"} onChange={props.handleUserInput} defaultValue={props.endTime} />
      </div>
      <div className="event_buttons_container">
        <Button label="Save" func={props.updateEvent} type="save"/>
      </div>
    </div>
  </div>
)

SingleEventEditForm.propTypes = {
   handleUserInput: PropTypes.func.isRequired,
   updateEvent: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   startDate: PropTypes.string.isRequired,
   startTime: PropTypes.string.isRequired,
   endDate: PropTypes.string.isRequired,
   endTime: PropTypes.string.isRequired,
}



export default SingleEventEditForm;
