import React, { Component } from 'react';
import LoaderHOC from './LoaderHOC';
import PropTypes from 'prop-types';
import "../styles/JobData.css"

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


const RenderJobDescription = ({data_array}) => <div>
  {data_array.map((element, index) => {
      switch (element.type) {
        case "heading": return <h2 key={index}>{element.value}</h2>
          break;
        case "pahragraph": return <p key={index}>{element.value}</p>
          break;
        case "listitem": return <p className="listitem" key={index}>&#9679;<span>{element.value}</span></p>
          break;
        default: return null;
      }
    })}
</div>


const DataSection = (props) => (
  <div className="job_data_info_section">
    {props.date && <p className="date"><span>Released:</span> {beautifyDate(props.date)}</p>}
    <p className="location"><span>Location:</span> {props.location}</p>
    {props.salaryMin && <p className="salaryMin_salaryMax"><span>Salary:</span> {props.salaryMin} to {props.salaryMax} BGN</p>}
    {props.salarySingle && <p className="salarySingle"><span>Salary:</span> {props.salarySingle} BGN</p>}
    <p className="compoanyName"><span>Company:</span> {props.compoanyName}</p>
  </div>
)

const JobData = ({job}) => (
      <div className="job_data_container">
        <DataSection
          compoanyName={job.compoanyName}
          compoanyPicture={job.compoanyPicture}
          date={job.date}
          location={job.location}
          company={job.company}
          salaryMin={job.salaryMin}
          salaryMax={job.salaryMax}
          salarySingle={job.salarySingle}
        />
        <img src={job.compoanyPicture} alt="" className="compoanyPicture"/>
        <p className="title">{job.title}</p>
        <RenderJobDescription data_array={job.text_data}/>
      </div>
);

JobData.propTypes = {
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
    description: PropTypes.string,
    requirements: PropTypes.string,
    message: PropTypes.string
  }),
}

export default LoaderHOC("job")(JobData);
