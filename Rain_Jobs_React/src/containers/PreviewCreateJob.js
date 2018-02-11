import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';




class PreviewCreateJob extends Component {
  static displayName =  'PreviewCreateJob';

  render(){
    if(this.props.data){
      const {data} = this.props;
      return (
        <div>
          <p>{data.title}</p>
          <p>{data.category}</p>
          {data.salaryMin && <p>Min Salary: {data.salaryMin} Max Salary {data.salaryMax}</p>}
          {data.salarySingle && <p>Salary: {data.salarySingle}</p>}
          <p>{data.location}</p>
          <p>{data.compoanyName}</p>
          <img src={data.compoanyPicture} alt=""/>
          <p>{data.company}</p>
          <p>{data.description}</p>
          <p>{data.requirements}</p>
          <p>{data.message}</p>
          <button onClick={()=>this.props.createJob(data)}>Submit</button>
        </div>
      )
    }return null;
  }
}

const mapStateToProps = state => ({
  data: state.jobReducer.previewJobCreationData,
})

PreviewCreateJob.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    //category: PropTypes.???
    date: PropTypes.string,
    salaryMin: PropTypes.number,
    salaryMax: PropTypes.number,
    salarySingle: PropTypes.number,
    location: PropTypes.string.isRequired,
    compoanyName: PropTypes.string.isRequired,
    compoanyPicture: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired,
    message: PropTypes.string
  }),
}

export default connect(mapStateToProps)(PreviewCreateJob);
