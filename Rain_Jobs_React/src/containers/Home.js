import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fillJobs} from '../actions/jobsActions';
import { firebaseAuth , ref } from '../helpers/config';
import {  Link } from "react-router-dom";
import MenuBar from '../components/MenuBar';

const JobLink =  ({job}) => (
  <div style={{border:"1px solid black"}}>
    <Link to={`/job/${job.id}`}>
      <div>
        <p>{job.title}</p>
        <p>{job.location}</p>
        {job.date && <p>{job.date}</p>}
        {job.salaryMin && <p>From {job.salaryMin} to {job.salaryMax}</p>}
        {job.salarySingle && <p>Salary: {job.salarySingle}</p>}
        <p>Salary: {job.compoanyName}</p>
        <img alt="" src={job.compoanyPicture}/>
      </div>
    </Link>
  </div>
)





const formatDate = (newDate) => {
  //let newDate = new Date().toString()
  let mesec = ''; // mesec

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

const CreateDate = (dateString) => {
  let arr = dateString.split('/');
  return new Date(arr[2] , arr[1], arr[0]);
}

const sortRecords = (records) => {
  let sorted = records.sort((a, b) => {
      return CreateDate(a.date) > CreateDate(b.date);
  });
  return sorted.reverse();
}

/*const sortRecords = (records) => {
  return records.sort((a, b) => {
      return CreateDate(a.date) > CreateDate(b.date);
  }).reverse();
}*/
//refactored

class Home extends Component {
  componentDidMount() {
    if(!this.props.jobList){
      ref.child(`jobsdata`).on('value', snap =>{
        this.props.fillJobs(Object.values(snap.val())); //use sortRecords() on Object.values(snap.val())
      })
    }
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <p><Link to="/create/company-job">company-job</Link></p>
        <p><Link to="/create/personal-offer">personal-offer</Link></p>
         {this.props.jobList?
          this.props.jobList.map((job,index) => {
            return <JobLink job={job} key={index}/>
          }).reverse():
        <p>loadin...</p>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
    jobList: state.jobsReducer.jobList,
})


const mapDispatchToProps = (dispatch) => ({
    fillJobs: (data) => {
      dispatch(fillJobs(data))
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
