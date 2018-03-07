import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fillJobs , } from '../actions/jobsActions';
import { ref } from '../helpers/config';
import MenuBar from '../components/MenuBar';
import TextDataEditor from '../components/TextDataEditor';
import InputPreview from '../components/InputPreview';


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
      keywords: [],
      text_data: [],
      jobType: "fulltime",
      currentKeyword: "",
      title: "",
      salaryMin: "",
      salaryMax: "",
      salarySingle: "",
      location: "",
      compoanyPicture: "",
      compoanyName: "",
      sallaryType: true, // true - sigle / flase - double
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

  handleInputChangeCLEAR = (e) => {
    this.setState({[e.target.name]:e.target.value});
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
    tempKeywordArray.splice(tempKeywordArray.indexOf(keyword), 1);
    this.setState({keywords:tempKeywordArray});
  }

  addUnitInTextData = (inputValue, callback) => {
    let text_data_populated = this.state.text_data;
    text_data_populated.push(inputValue);
    this.setState({text_data: text_data_populated}, callback());
  }

  removeUnitInTextData = (unit, callback) => {
    let text_data_populated = this.state.text_data;
    text_data_populated.splice(text_data_populated.indexOf(unit), 1);
    this.setState({text_data: text_data_populated}, callback());
  }

  toggleTitleEdit = () => {
    this.setState({title_saved: !this.state.title_saved})
  }

  toggleSalaryType = (e) => {
    this.setState({sallaryType: !this.state.sallaryType})
  }

  render(){
    return (
      <div>
        <div style={{height:"100px"}}></div>

        <InputPreview
          value={this.state.title}
          handleChange={this.handleInputChangeCLEAR}
          name="title"
          holder="Title"
        />
        <button onClick={()=>this.toggleSalaryType()}>toggle to {this.state.sallaryType?"double":"sigle"}</button>
        {this.state.sallaryType && <InputPreview
          value={this.state.salarySingle}
          handleChange={this.handleInputChangeCLEAR}
          name="salarySingle"
          holder="Salary"
        />}
        {!this.state.sallaryType &&
          <div>
            <InputPreview
              value={this.state.salaryMax}
              handleChange={this.handleInputChangeCLEAR}
              name="salaryMax"
              holder="salaryMax"
            />
            <InputPreview
              value={this.state.salaryMin}
              handleChange={this.handleInputChangeCLEAR}
              name="salaryMin"
              holder="salaryMin"
            />
          </div>}
        <InputPreview
          value={this.state.location}
          handleChange={this.handleInputChangeCLEAR}
          name="location"
          holder="Location"
        />
        <InputPreview
          value={this.state.compoanyName}
          handleChange={this.handleInputChangeCLEAR}
          name="compoanyName"
          holder="compoanyName"
        />
        <InputPreview
          value={this.state.compoanyPicture}
          handleChange={this.handleInputChangeCLEAR}
          name="compoanyPicture"
          holder="compoanyPicture"
          isPicture={true}
        />

        <KeyWordsSelector
          handleInputChange={this.handleInputChangeCLEAR}
          keyWordArray={this.state.keywords}
          currentKeyword={this.state.currentKeyword}
          addFunction={this.addKeyword}
          removeFunction={this.removeKeyword}
        />

        <JobTypeSelect jobType={this.state.jobType} handleChange={this.handleJobTypeSelection}/>


        <TextDataEditor textDataArray={this.state.text_data} addFunction={this.addUnitInTextData} removeFunction={this.removeUnitInTextData}/>

        <button onClick={()=>this.props.createJob(this.state)}>Create Job</button>
        <button onClick={()=>this.props.save_for_preview(this.state)}>Previewe</button>
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
