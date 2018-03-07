import React, { Component } from 'react';
//import {connect} from 'react-redux';
import MenuBar from '../components/MenuBar';
import CreateJob from './CreateJob';
import { firebaseAuth } from '../helpers/config';
import PreviewCreateJob from './PreviewCreateJob';
import { ref } from '../helpers/config';

const formatDate = (newDate) => {
  let mesec = '';
  switch (newDate.substr(4,3)) {
    case 'Jan': mesec = '01'; break;
    case 'Feb': mesec = '02'; break;
    case 'Mar': mesec = '03'; break;
    case 'Apr': mesec = '04'; break;
    case 'May': mesec = '05'; break;
    case 'Jun': mesec = '06'; break;
    case 'Jul': mesec = '07'; break;
    case 'Aug': mesec = '08'; break;
    case 'Sep': mesec = '09'; break;
    case 'Oct': mesec = '10'; break;
    case 'Nov': mesec = '11'; break;
    case 'Dec': mesec = '12'; break;
    default: return true;
  }
return `${newDate.substr(8,2)}/${mesec}/${newDate.substr(11,4)}`;
}

class CreateJobPage extends Component {
  state = {
    loading: true
  }
  componentDidMount = () => {
    this.setState({loading:false})
  }
  createJob = (dataObject) => {
    ref.child("jobsdata").push().set(
      Object.assign(
        {},
        dataObject,
        {
          id: Math.floor(Math.random()*1000000+1) ,
          date: formatDate(new Date().toString()),
          uid: firebaseAuth().currentUser.uid,
        }
      )
    );
  }
  render(){
    const {loading} = this.state;
    return (!loading?
      <div>
        <MenuBar/>
        <CreateJob createJob={this.createJob}/>
        <PreviewCreateJob createJob={this.createJob}/>
      </div> : <p>Loading...</p>
    )
  }
}

export default CreateJobPage;
