import React, { Component } from 'react';
import './App.css';
import { Event } from "./Event/Event";
import { EventForm } from "./EventForm/EventForm";
import { DB_CONFIG } from "./config/config";
import firebase from "firebase/app";
import "firebase/database";


class App extends Component {//osnoven component
  constructor(props){//construktor
    super(props);
    this.addEvent=this.addEvent.bind(this);//bindvame addEvent kum classa App
    this.removeEvent = this.removeEvent.bind(this);//bindvame removeEvent kum classa App
    this.updateEvent = this.updateEvent.bind(this);//bindvame removeEvent kum classa App
    this.app = firebase.initializeApp(DB_CONFIG); //inicializirame bazata danni DB_CONFIG kum this.app
    this.database = this.app.database().ref().child("events");//prisvoqwame bazata danni s ime events kum this.database
    this.state= {//purvonachalniq status na classa App
      events:[],//zapochva kato prazen masiv
    }
  }
  componentWillMount(){//predi komponenta da se poqvi v DOM-a
    //suzdavame constanta s ima prevEvents na koqto prisvoqvame stoinosta na statusa events na classa, v sluchaq prazen  masiv []
    const prevEvents = this.state.events;
    //pri eventa 'child_added' poqvil se na this.database, vrushta izgleda(snap) na bazata danni i kum prevEvents dobavq obekt
    this.database.on('child_added', snap =>{
      prevEvents.push({
        id:snap.key,
        eventContent:snap.val().eventContent,
        eventLocation:snap.val().eventLocation,
        eventStartDate:snap.val().eventStartDate,
        eventStartTime:snap.val().eventStartTime,
        eventEndDate:snap.val().eventEndDate,
        eventEndTime:snap.val().eventEndTime
      })
//prisvoqtava statusa na elementa da bude raven na noviq napulnen s obekti ot bazata danni masiv prevEvents, i componentite se rendervat
      this.setState({
        events:prevEvents
      });

    })
//pri event ot tipa child_removed , vrushta izgleda na bazata danni
    this.database.on('child_removed', snap=>{
      for (var i = 0; i < prevEvents.length; i++) {/*minavaiki vsichki elementi na masiva , ako na nqkoi ot indexite id-to suvpada s e ravno na key ot izgleda , to da se premahne ot tekushtiq index 1 element*/
        if (prevEvents[i].id === snap.key) {
          prevEvents.splice(i,1);
        }
      }
      //prisvoqtava statusa na elementa da bude raven na noviq napulnen s obekti ot bazata danni masiv prevEvents, i componentite se rendervat
      this.setState({
        events:prevEvents
      })
    })
  }
  updateEvent(newEventValue,newEventLocation, newEventStartDate,newEventStartTime,newEventEndDate,newEventEndTime, newEventValueKey){
    this.database.child(newEventValueKey).set({
      eventContent:newEventValue,
      eventLocation:newEventLocation,
      eventStartDate:newEventStartDate,
      eventStartTime:newEventStartTime,
      eventEndDate:newEventEndDate,
      eventEndTime:newEventEndTime
    });
  }
  addEvent(event,loc,Sdate,Stime,Edate,Etime){
    this.database.push().set({
       eventContent:event,
       eventLocation:loc,
       eventStartDate:Sdate,
       eventStartTime:Stime,
       eventEndDate:Edate,
       eventEndTime:Etime
     });
  }
  removeEvent(eventId){
    this.database.child(eventId).remove();
  }
  render() {
    return (
      <div>
        <div className="header">
          <p className="main_heading">Events Manager</p>
        </div>


        <div className="eventsWraper">
          <div className="eventsContainer">
              {
                this.state.events.map((event)=>{
                  return(<Event
                    eventContent={event.eventContent}
                    eventLocation={event.eventLocation}
                    eventStartDate={event.eventStartDate}
                    eventStartTime={event.eventStartTime}
                    eventEndDate={event.eventEndDate}
                    eventEndTime={event.eventEndTime}
                    eventId={event.id}
                    key={event.id}
                    removeEvent={this.removeEvent}
                    updateEvent={this.updateEvent}
                    />)
                })
              }

          </div>
        </div>
        <p className="addNew_events_above_p">Add a new event ...</p>
            <EventForm addEvent={this.addEvent}/>


    </div>
    );
  }
}

export default App;
