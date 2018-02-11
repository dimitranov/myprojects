import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { firebaseAuth , ref } from '../helpers/config';
import MenuBar from '../components/MenuBar';

const  beautifyDate = (dataString) => { // 31/12/2018
  let tempString = dataString;
  let month = '';
  switch (tempString.substring(3,5)) {
    case '01': month = 'Jan'; break;
    case '02': month = 'Feb'; break;
    case '03': month = 'Mar'; break;
    case '04': month = 'Apr'; break;
    case '05': month = 'May'; break;
    case '06': month = 'Jun'; break;
    case '07': month = 'Jul'; break;
    case '08': month = 'Aug'; break;
    case '09': month = 'Sep'; break;
    case '10': month = 'Oct'; break;
    case '11': month = 'Nov'; break;
    case '12': month = 'Dec'; break;
    default: return true;
  }
  return `${tempString.substring(0,2)} ${month} ${tempString.substring(6)}`;
}


class Job extends Component {

  componentDidMount(){
    ref.child(`jobsdata`).on('value', snap =>{
      let data = Object.values(snap.val());
      for(let unit of data){
        if(unit.id == this.props.match.params.jobID){
          this.props.fillSelectedJobData(unit);
        }
      }
    })
  }
  render(){
    const { job } = this.props;
    if(job){
      return (
        <div>
          <MenuBar/>
          <p>job / {job.id} </p>
          <p>{job.title}</p>
          {job.date && <p>{beautifyDate(job.date)}</p>}
          {job.keywords && <p>{job.keywords[1]}</p>}
          {job.salaryMin && <p>Min Salary: {job.salaryMin} Max Salary {job.salaryMax}</p>}
          {job.salarySingle && <p>Salary: {job.salarySingle}</p>}
          <p>{job.location}</p>
          <p>{job.compoanyName}</p>
          <img src={job.compoanyPicture} alt=""/>
          {job.company && <p>{job.company}</p>}
          <p>{job.description}</p>
          <p>{job.requirements}</p>
          {job.message && <p>{job.message}</p>}
        </div>
      )
    }else return <span>Loading..</span>
  }
}

Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    salaryMin: PropTypes.string,
    salaryMax: PropTypes.string,
    salarySingle: PropTypes.string,
    location: PropTypes.string.isRequired,
    compoanyName: PropTypes.string.isRequired,
    compoanyPicture: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired,
    message: PropTypes.string
  }),
}

const mapStateToProps = state => ({
    job: state.jobReducer.selectedJobData,
})

const mapDispatchToProps = dispatch => ({
  fillSelectedJobData: (data) => {
    dispatch({
      type: 'FILL_SELECTED_JOB_DATA',
      payload: data
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Job);
