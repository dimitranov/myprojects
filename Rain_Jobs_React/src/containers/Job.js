import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseAuth , ref } from '../helpers/config';
import MenuBar from '../components/MenuBar';

import JobData from './JobData';




class Job extends Component {
  state = {
    user: firebaseAuth().currentUser,
  }
  componentDidMount(){
    ref.child(`jobsdata`).on('value', snap =>{
      let data = Object.values(snap.val());
      for(let unit of data){
        if(unit.id == this.props.match.params.jobID)
          this.props.fillSelectedJobData(unit);
      }
    })
  }
  rendeSpecia = (job) => {
    if(this.state.user)
      if(this.state.user.uid === job.uid)
        return <p>EDITABLE</p>
  }
  render(){
    const { job } = this.props;
    return ( job ?
        <div className="content_container_omega">
          <MenuBar/>
          <JobData job={job} />
          { this.rendeSpecia(job) }
        </div>:null
      )
    }
}

Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    salaryMin: PropTypes.string,
    salaryMax: PropTypes.string,
    salarySingle: PropTypes.string,
    location: PropTypes.string.isRequired,
    compoanyName: PropTypes.string.isRequired,
    compoanyPicture: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string,
    requirements: PropTypes.string,
    message: PropTypes.string
  }),
}

const mapStateToProps = state => ({
  job: state.jobReducer.selectedJobData,
})

const mapDispatchToProps = dispatch => ({
  fillSelectedJobData: (data) => {
    dispatch({ type: 'FILL_SELECTED_JOB_DATA', payload: data })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Job);
