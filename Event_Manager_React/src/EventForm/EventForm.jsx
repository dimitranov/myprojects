import React, {Component} from "react";
import "./EventForm.css";

export class EventForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      visible:false,
      newEventContent:"",
      newEventLocation:"",
      newEventStartDate:"",
      newEventStartTime:"",
      newEventEndDate:"",
      newEventEndTime:""
    };
  }
  handleUserInput(e){
    this.setState({
      [e.target.name]:e.target.value
    });

  }
  writeEvent(){

    this.props.addEvent(
      this.state.newEventContent,
      this.state.newEventLocation,
      this.state.newEventStartDate,
      this.state.newEventStartTime,
      this.state.newEventEndDate,
      this.state.newEventEndTime
    );
    this.setState({
      newEventContent:"",
      newEventLocation:"",
      newEventStartDate:"",
      newEventStartTime:"",
      newEventEndDate:"",
      newEventEndTime:"",
      visible:!this.state.visible
    });
  }
  handleFormVisibility(){
    this.setState({visible:!this.state.visible})
  }
  handleCancleAddingNew(){
    this.setState({visible:!this.state.visible})
  }
  render(){
    if(!this.state.visible){
      return(
        <div className="add_event_btn_container">
          <button className="event_input_button" onClick={this.handleFormVisibility.bind(this)}>Add</button>
        </div>
      )
    }else{
    return(
    <div className="addEvent_container">
      <div className="addEvent_Wraper">
        <input
          className="event_input"
          placeholder="Add event"
          name={"newEventContent"}
          value={this.state.newEventContent}
          onChange={this.handleUserInput.bind(this)}
          />
        <input
          className="event_input"
          placeholder="Add location"
          name={"newEventLocation"}
          value={this.state.newEventLocation}
          onChange={this.handleUserInput.bind(this)}
          />
        <div className="DnT_input_container">
          <input className="event_input DnT_inputs" type="date" value={this.state.newEventStartDate} name={"newEventStartDate"} onChange={this.handleUserInput.bind(this)}/>
          <input className="event_input DnT_inputs" type="time" value={this.state.newEventStartTime} name={"newEventStartTime"} onChange={this.handleUserInput.bind(this)}/>
        </div>
        <div className="DnT_input_container">
          <input className="event_input DnT_inputs" type="date" value={this.state.newEventEndDate} name={"newEventEndDate"} onChange={this.handleUserInput.bind(this)}/>
          <input className="event_input DnT_inputs" type="time" value={this.state.newEventEndTime} name={"newEventEndTime"} onChange={this.handleUserInput.bind(this)}/>
        </div>
          <div className="DnT_input_container">
            <button className="event_input_button" onClick={this.writeEvent.bind(this)}>Add</button>
            <button className="cancel_button" onClick={this.handleCancleAddingNew.bind(this)}>Cancle</button>
          </div>
        </div>
    </div>
  ) ;
    }
  }
}
