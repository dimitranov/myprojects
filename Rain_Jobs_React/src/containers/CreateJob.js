import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fillJobs , } from '../actions/jobsActions';
import { ref } from '../helpers/config';
import MenuBar from '../components/MenuBar';

const InputField = ({name,title,err,onChange,type}) => (
  <div style={{display:"block"}}>
    <p>{title}</p>
    <input type={type?type:"text"} id="title" name={name} onChange={onChange}/>
    <p>{err}</p>
  </div>
)

const TextAreaField = ({name,title,err,onChange}) => (
  <div style={{display:"block"}}>
    <p>{title}</p>
    <textarea type="text" id="title" name={name} onChange={onChange}/>
    <p>{err}</p>
  </div>
)

const KeyWordsSelector = ({handleInputChange,addFunction,keyWordArray,removeFunction,currentKeyword}) => {
  if(!keyWordArray.length){
    return (<div>
      <input type="text" name="currentKeyword" placeholder="keyword" onChange={handleInputChange} value={currentKeyword}/><button onClick={()=>addFunction()}>Add</button>
    </div>)
  }else if(keyWordArray.length>0){
    return (
      <div>
        {
          keyWordArray.map((kword,index) => {
            return <div key={index}><span>{kword}</span><button onClick={()=>removeFunction(kword)}>remove</button></div>
          })
        }
        <input type="text" name="currentKeyword" placeholder="keyword" onChange={handleInputChange} value={currentKeyword}/>
        <button onClick={()=>addFunction()}>Add</button>
      </div>
    )
  }
}

const JobTypeSelect = ({jobType,handleChange}) => (
  <select value={jobType} onChange={handleChange}>
    <option value="fulltime">Full Time (8h)</option>
    <option value="parttime">Part Time (4h-6h)</option>
    <option value="internship">Internship</option>
  </select>
  )


class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.timeout =  0;
    this.state = {
      title: "",
      keywords: [],
      currentKeyword: "",
      jobType: "fulltime",
      salaryMin: null,
      salaryMax: null,
      salarySingle: null,
      location: "",
      compoanyPicture: "",
      compoanyName: "",
      company: "",
      description: "",
      requirements: "",
      message: "",
    }
  }

  handleInputChange = (e) => {
    this.setState(
      {[e.target.name]:e.target.value},
      () => {
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.props.save_for_preview(this.state);
        }, 1500);
      }
    );
  }

  handleJobTypeSelection = (e) => {
    this.setState({jobType: e.target.value});
  }

  addKeyword = () => {
    let tempKeywordArray = this.state.keywords;
    let currentKeyword = this.state.currentKeyword;
    if(currentKeyword.split(" ").length>1){
      tempKeywordArray.push(currentKeyword.split(" ").join("-"));
    } else {
      tempKeywordArray.push(this.state.currentKeyword);
    }
    this.setState({keywords:tempKeywordArray, currentKeyword: ""});
  }

  removeKeyword = (keyword) => {
    let tempKeywordArray = this.state.keywords;
    let indexOfKeyword = tempKeywordArray.indexOf(keyword);
    tempKeywordArray.splice(indexOfKeyword, 1);
    this.setState({keywords:tempKeywordArray});
  }

  render(){
    return (
      <div>
        <InputField name="title" title="title" onChange={this.handleInputChange} />
        <InputField name="salaryMin" title="salary min" type="number" onChange={this.handleInputChange}/>
        <InputField name="salaryMax" title="salary max" type="number" onChange={this.handleInputChange}/>
        <InputField name="salarySingle" title="salary single" type="number" onChange={this.handleInputChange}/>

        <KeyWordsSelector
          handleInputChange={this.handleInputChange}
          keyWordArray={this.state.keywords}
          currentKeyword={this.state.currentKeyword}
          addFunction={this.addKeyword}
          removeFunction={this.removeKeyword}
        />

        <JobTypeSelect jobType={this.state.jobType} handleChange={this.handleJobTypeSelection}/>

        <InputField name="location" title="location" onChange={this.handleInputChange}/>
        <InputField name="compoanyName" title="compoany name" onChange={this.handleInputChange}/>
        <InputField name="compoanyPicture" title="compoany picture" onChange={this.handleInputChange}/>
        <TextAreaField name="company" title="company" onChange={this.handleInputChange}/>
        <TextAreaField name="description" title="description" onChange={this.handleInputChange}/>
        <TextAreaField name="requirements" title="requirements" onChange={this.handleInputChange}/>
        <TextAreaField name="message" title="message" onChange={this.handleInputChange}/>
        <button onClick={()=>this.props.createJob(this.state)}>Create Job</button>
        <button onClick={()=>this.props.save_for_preview(this.state)}>Preview</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    jobList: state.jobsReducer.jobList,
})

const mapDispatchToProps = (dispatch) => ({
    save_for_preview: dataObject => {
     dispatch({
       type: "FILL_PREVIEW_JOB_DATA",
       payload: dataObject
     })
   },
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateJob);
