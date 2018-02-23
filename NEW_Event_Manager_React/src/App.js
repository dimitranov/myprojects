import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { ref } from './config/config';
import ErrorModal from './components/ErrorModal';
import Header from './components/Header';
import EventsList from './components/EventsList';
import EventFormContainer from './components/EventFormContainer';
import './App.css';


class App extends Component {
  componentDidMount() {
      ref.child(`events`).on('value', snap =>{
        if(!snap.val()){
          this.props.fillEventArray([])
          console.log("kreate event", snap.val());
        }
        else this.props.fillEventArray(Object.values(snap.val()))
      })
  }
  addEvent = (dataObject,callback) => {
      let tempData = this.props.data;
      const { title, location, startTime, startDate, endTime, endDate } = dataObject;
      if(title && location && startTime && startDate && endTime && endDate){
        tempData.push({
          id_key: Math.floor(Math.random()*1000000+1) ,
          title: title,
          location: location,
          startTime: startTime,
          endTime: endTime,
          startDate: startDate,
          endDate: endDate,
        });
        callback();
        ref.child(`events`).set(tempData)
      }
      else this.props.errorOccured();
  }
  removeEvent = (id) => {
      let tempData = this.props.data;
      for (let i = 0; i < tempData.length; i++) {
        if(tempData[i].id_key == id){
          tempData.splice(i,1);
          ref.child(`events`).set(tempData)
        }
      }
  }
  updateEvent = (updatingEventID , dataToUpdate, callback) => {
    let tempData = this.props.data;
    let {title,location,startTime,startDate,endTime,endDate} = dataToUpdate;
    if(title && location && startTime && startDate && endTime && endDate){
      for (let i = 0; i < tempData.length; i++) {
        if(tempData[i].id_key == updatingEventID)
        ref.child(`events/${i}`).set(dataToUpdate)
      }
      callback();
    }else this.props.errorOccured(); // execute a function  that  shows a modal with  the error
  }
  render(){
    const { data, isThereError , errorUnderstood } = this.props;
    return (
      <div className="app">
        {isThereError && <ErrorModal errorUnderstood={errorUnderstood}/>}
        <Header/>
        <div className="events_list_wraper_parent">
          <div className="events_list_wraper">
            <EventsList data={data} removeEvent={this.removeEvent} updateEvent={this.updateEvent}/>
            <EventFormContainer addEvent={this.addEvent} />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id_key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
  ),
  isThereError: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  data: state.events_list_reducer.eventsList,
  isThereError: state.events_list_reducer.isThereError
})

const mapDispatchToProps = dispatch => ({
  fillEventArray: (data) => {
    dispatch({type: "POPULATE_EVENTS_LIST", payload: data})
  },
  errorUnderstood: () => {
    dispatch({type: "ERROR_UNDERSTOOD", payload: false})
  },
  errorOccured: () => {
    dispatch({type: "ERROR_OCCURED", payload: true})
  }

})

export default connect( mapStateToProps, mapDispatchToProps )( App );
