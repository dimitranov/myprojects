import React, {Component} from "react";
import "./Event.css";
import PropTypes from "prop-types";

export class Event extends Component{
  constructor(props){
    super(props);
    this.eventContent = props.eventContent;
    this.eventLocation = props.eventLocation;
    this.eventStartDate = props.eventStartDate;
    this.eventStartTime = props.eventStartTime;
    this.eventEndDate = props.eventEndDate;
    this.eventEndTime = props.eventEndTime;

    this.eventId = props.eventId;
    this.updateEvent = props.updateEvent;
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleSaveEditsClick = this.handleSaveEditsClick.bind(this);
    this.state = {
      edit:false,
      value:this.eventContent,
      location:this.eventLocation,
      dateStart:this.eventStartDate,
      timeStart:this.eventStartTime,
      dateEnd:this.eventEndDate,
      timeEnd:this.eventEndTime

    }
  }
  handleRemoveEvent(id){
    this.props.removeEvent(id);
  }
  handleEdivClick(){
    this.setState({
      edit:!this.state.edit
    })

  }
  handleSaveEditsClick(id){
    let valueOfnew = (this.refs.updatedEventContent.value!== "")?this.refs.updatedEventContent.value:"No Selected";
    let locationOfnew = (this.refs.updatedEventLocation.value!== "")?this.refs.updatedEventLocation.value:"No Selected";
    let dateStartOfnew = (this.refs.updatedEventStartDate.value !== "")?this.refs.updatedEventStartDate.value:"No Selected";
    let timeStartOfnew = (this.refs.updatedEventStartTime.value!== "")?this.refs.updatedEventStartTime.value:"No Selected";
    let dateEndOfnew = (this.refs.updatedEventEndDate.value!== "")?this.refs.updatedEventEndDate.value:"No Selected";
    let timeEndOfnew = (this.refs.updatedEventEndTime.value!== "")?this.refs.updatedEventEndTime.value:"No Selected";

    this.updateEvent(valueOfnew,locationOfnew,dateStartOfnew,timeStartOfnew,dateEndOfnew,timeEndOfnew,id);
    this.setState({
      edit:!this.state.edit,
      location:locationOfnew,
      value:valueOfnew,
      dateStart:dateStartOfnew,
      timeStart:timeStartOfnew,
      dateEnd:dateEndOfnew,
      timeEnd:timeEndOfnew
    })
  }
  render(){
    if(this.state.edit){
      return(
        <div className="eventParent eventParent_inPlace">
          <button className="event_button event_remove_button" onClick={()=>{this.handleRemoveEvent(this.eventId)}}>Remove</button>
          <button className="event_button event_save_button" onClick={() => {this.handleSaveEditsClick(this.eventId)}}>Save</button>

          <input className="event_edit_input" type="text" ref="updatedEventContent" defaultValue={this.state.value}></input>
          <input className="event_edit_input event_location_input" type="text" ref="updatedEventLocation" defaultValue={this.state.location}></input>
          <hr/>
          <div className="DnT_input_container_edit">
            <input className="event_edit_input start_date_input" type="date" ref="updatedEventStartDate" defaultValue={this.state.dateStart}></input>
            <input className="event_edit_input start_time_input" type="time" ref="updatedEventStartTime" defaultValue={this.state.timeStart}></input>
          </div>
          <div className="DnT_input_container_edit">
            <input className="event_edit_input end_date_input" type="date" ref="updatedEventEndDate" defaultValue={this.state.dateEnd}></input>
            <input className="event_edit_input end_time_input" type="time" ref="updatedEventEndTime" defaultValue={this.state.timeEnd}></input>
          </div>


        </div>
      )
    }else{
      return(
        <div className="eventParent eventParent_inPlace">
          <button className="event_button event_remove_button" onClick={()=>{this.handleRemoveEvent(this.eventId)}}>Remove</button>
          <button className="event_button event_edit_button" onClick={this.handleEdivClick.bind(this)}>Edit</button>

          <p className="eventContent">
            {(this.state.value!=="")?this.state.value:"No event name"}
          </p>
          <p className="eventLocation">
            {(this.state.location!=="")?this.state.location:"No event location"}
          </p>
          <hr/>
          <p className="eventDnT">Begins:
              <span className="spanDnT">
              {(this.state.dateStart!=="")?" - "+this.state.dateStart:""}
              {(this.state.timeStart!=="")?(" at "+this.state.timeStart):""}
             </span>
         </p>
          <p className="eventDnT">Ends:
            <span className="spanDnT">
              {(this.state.dateEnd!=="")?" - "+this.state.dateEnd:""}
              {(this.state.timeEnd!=="")?(" at "+this.state.timeEnd):""}
            </span>
          </p>


        </div>
      )
    }



  }
}

Event.propTypes={
  eventContent:PropTypes.string,
  eventLocation:PropTypes.string,
eventStartDate:PropTypes.string,
eventStartTime:PropTypes.string,
eventEndDate:PropTypes.string,
eventEndTime:PropTypes.string

}
