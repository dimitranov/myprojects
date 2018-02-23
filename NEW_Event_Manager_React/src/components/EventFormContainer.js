import React, { Component } from 'react';
import EventForm from './EventForm';
import RevealFormButton from './RevealFormButton';

class EventFormContainer extends Component {
  state = {
    isFormVisible: false,
  };

  showForm = () => {
    this.setState({isFormVisible: true})
  }
  hideForm = () => {
    this.setState({isFormVisible: false})
  }
  render(){
    return (
      <div>
        {
          this.state.isFormVisible ?
          <EventForm
            addEvent={this.props.addEvent}
            hideForm={this.hideForm}
          /> :
          <RevealFormButton showForm={this.showForm}/>
        }
      </div>
    )
  }
}

 export default EventFormContainer;
