import React from 'react';
import LoaderHOC from '../containers/LoaderHOC';
import {  Link } from "react-router-dom";
import "../styles/Home.css";

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



const dateIsToday = (date) => {
  let newDate_formated = formatDate(new Date().toString());
  if(newDate_formated == date){
    return true;
  }
  return false;
}

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

const JobLink =  ({job}) => (
    <Link to={`/job/${job.id}`}>
      <div className="job">
        <div className="job_text">
          <p className="title">{job.title}</p>
          {job.salaryMin && <p className="salaryMin_salaryMax">From {job.salaryMin} to {job.salaryMax} BGN</p>}
          {job.salarySingle && <p className="salarySingle">{job.salarySingle}  BGN</p>}
          <p className="location">{job.location}</p>
        </div>
        <div className="job_image_container">
          {job.date && <div>{dateIsToday(job.date)?<p className="date">Posted Today</p>:<p className="date">{beautifyDate(job.date)}</p>}</div>}
          <img alt="" src={job.compoanyPicture} className="compoanyPicture"/>
        </div>
      </div>
    </Link>
)

const JobsList = ({data}) => {
  return (
    <div className="job_list_container_parent">
      <div className="job_list_container">{
        data.map((job,index) => {
          return <JobLink job={job} key={index}/>
        }).reverse()
      }
    </div>
  </div>
  )
}

export default LoaderHOC("data")(JobsList);
