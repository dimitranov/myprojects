import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import Introduction from './Introduction';
import OptionalActions from './OptionalActions';
import Question from './Question';

import {QuestionTitles,idustrys} from './../config/dataConstants';




export default class Assesment extends Component {
  constructor(props) {
    super(props);
    this.questionCounter = 1;
    this.submitResult = props.submitResult;
    this.submitHelp = props.submitHelp;
    this.getAnswerCalculations = props.getAnswerCalculations;
    this.state={
      industry:'',
      answers:[
        "0","0","0","0","0",
        "0","0","0","0","0",
        "0","0","0","0","0",
        "0","0","0","0","0",
        "0","0","0","0","0"
      ],
      unlocked:false,//false
      loading:false,
      errorTakeAssesment:"",
      errorSubmit:"",
      errorHelpSubmit:"",
      errorName:false,
      errorEmail:false,
      errorIndustry:false,
      errorHelp:false,
      allAnswered:false,
      didHelpMessageSend:false,


    }
  }
  
  addAnswer = (answerValue,i) => {
    this.tempState = this.state.answers;
    this.tempState[i] = parseInt(answerValue);

  }

  handleSelectIndustry = (event, index, industry) => this.setState({industry});

  unlockQuiz = () => {
    if (this.name.getValue().length > 4) { //name validaion ( pravilno >)
       this.setState({errorName:false})
    }else this.setState({errorName:"Name to short"});

    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegEx.test(this.email.getValue())) { //email validation ( pravilno  bez ! )
       this.setState({errorEmail:false})
    }else this.setState({errorEmail:"Email not valid"});


    if(this.state.industry !== ''){ //industry validaion ( pravilno !== )
       this.setState({errorIndustry:false})
    }else this.setState({errorIndustry:"No industry selected"});


    if( this.name.getValue().length > 4 && //name validaion ( pravilno >)
        emailRegEx.test(this.email.getValue()) &&//email  validation ( pravilno  bez ! )
        this.state.industry !== '' ){//industry validaion ( pravilno !== )
      this.setState({loading:true}
        ,()=>{
          setTimeout(() => {
            this.setState({loading:false,unlocked:true,errorTakeAssesment:""})
          },1000)}
      )
    }
     else this.setState({errorTakeAssesment:"Please fill the form above correctly"},()=>{
       setTimeout(()=>{this.setState({errorTakeAssesment:""})},3000)
     })
  }

  handleSendHelpMessage = (optionalHelpMessage) => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.name.getValue().length > 4) { //name validaion ( pravilno >)
       this.setState({errorName:false})
    }else this.setState({errorName:"Name to short"});

    if (emailRegEx.test(this.email.getValue())) { //email validation ( pravilno  bez ! )
       this.setState({errorEmail:false})
    }else this.setState({errorEmail:"Email not valid"});

    if(this.state.industry !== ''){ //industry validaion ( pravilno !== )
       this.setState({errorIndustry:false})
    }else this.setState({errorIndustry:"No industry selected"});

    if(optionalHelpMessage !== ''){
       this.setState({errorHelp:false})
    }else this.setState({errorHelp:"No message writen"});

    if( this.name.getValue().length > 4 && //name validaion ( pravilno >)
      emailRegEx.test(this.email.getValue()) &&//email  validation ( pravilno  bez ! )
      this.state.industry !== '' ){//industry validaion ( pravilno !== )
        if(optionalHelpMessage !== ""){
          this.setState({
            didHelpMessageSend:true,errorHelpSubmit:""
          },()=>{
            const  dataNew = new Date();
            const timeOfSubmit = dataNew.toLocaleString();
            this.submitHelp(
              this.name.getValue(),
              this.email.getValue(),
              this.state.industry,
              optionalHelpMessage,
              this.state.answers,
              timeOfSubmit)
          })
        }
        else {
          this.setState({errorHelpSubmit:"Please write some message"},()=>{
            setTimeout(()=>{this.setState({errorHelpSubmit:""})},6000)
          })
          console.log("this.tempStete e undefined");
        }
      }else this.setState({errorHelpSubmit:"Please fill the form above correctly"},()=>{
        setTimeout(()=>{this.setState({errorHelpSubmit:""})},6000)
        });

  }










  handleResultSubmit = (optionalHelpMessage) => {

        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let tempArray;
        //console.log("this.tempState predi setState({answers:this.tempState}", this.tempState);
        if(this.tempState){
          this.setState({answers:this.tempState},()=>{
            tempArray = (this.state.answers)?this.state.answers:["0","0"];
          //  console.log("this.tempState sled setState({answers:this.tempState}", this.tempState);
            if(tempArray.includes("0")){
              //console.log(this.tempState,tempArray);
              this.setState({errorSubmit:"Please answer all questions"},()=>{
                setTimeout(()=>{this.setState({errorSubmit:""})},3000)
              })
            }
            else {
              this.getAnswerCalculations(this.state.answers);
              if( this.name.getValue().length > 4 && //name validaion ( pravilno >)
              emailRegEx.test(this.email.getValue()) &&//email  validation ( pravilno  bez ! )
              this.state.industry !== '' ){//industry validaion ( pravilno !== )
                const  dataNew = new Date();
                const timeOfSubmit = dataNew.toLocaleString();
                this.submitResult(
                  this.name.getValue(),
                  this.email.getValue(),
                  this.state.industry,
                  optionalHelpMessage,
                  this.state.answers,
                  timeOfSubmit)
                }else this.setState({errorSubmit:"Please fill the form above"},()=>{
                  setTimeout(()=>{this.setState({errorSubmit:""})},3000)
                });
            }
            })//this.setState({answers:this.tempState}
        }else {
            this.setState({errorSubmit:"Please answer all questions"},()=>{
              setTimeout(()=>{this.setState({errorSubmit:""})},3000)
            })
          console.log("this.tempStete e undefined");
        }




}//handleResultSubmit
  renderQuestion = () => {
    let output;
    if( this.state.unlocked ){
        output = QuestionTitles.map((title, i) => {
               if(i===0 ){
                 return <div key={i}>
                         <p className="rated_responses single_c_title">Concept</p>
                         <Question addAnswer={this.addAnswer} title={title} key={i} count={i} />
                       </div>
               }else if (i===5){
                 return <div key={i}>
                           <p className="rated_responses single_c_title">Connecting</p>
                           <Question addAnswer={this.addAnswer} title={title} key={i} count={i} locked={this.state.locked}/>
                        </div>
               }else if (i===10){
                 return <div key={i}>
                           <p className="rated_responses single_c_title">Collateral</p>
                           <Question addAnswer={this.addAnswer} title={title} key={i} count={i} locked={this.state.locked}/>
                        </div>
               }else if (i===15){
                 return <div key={i}>
                           <p className="rated_responses single_c_title">Communication</p>
                           <Question addAnswer={this.addAnswer} title={title} key={i} count={i} locked={this.state.locked}/>
                        </div>
               }else if (i===20){
                 return <div key={i}>
                           <p className="rated_responses single_c_title">Consolidation</p>
                           <Question addAnswer={this.addAnswer} title={title} key={i} count={i} locked={this.state.locked}/>
                        </div>
               }else {
                 return <Question addAnswer={this.addAnswer} title={title} key={i} count={i} locked={this.state.locked}/>
               }
             })
      } else {
        output = null;
      }
    return output;
  }

  render() {
    return (
      <div className="all_container">
        <div className="all_wraper">
          <Introduction/>

          <div className="padding_holder">
            <div className="padding_holder_form">
            <div className="div_flex_center div_flex_colum input_container">
             <TextField
               hintText="e.g. Steve Peterson"
               floatingLabelText="Name"
               floatingLabelStyle={{color:"#494848"}}
               ref={(name) => { this.name = name }}
               style={{width:"100%"}}
               errorText={this.state.errorName}
             /><br />
             <TextField
               hintText="e.g. example@gmail.com"
               floatingLabelText="Email"
               floatingLabelStyle={{color:"#494848"}}
               ref={(email) => { this.email = email }}
               style={{width:"100%",marginTop:"-20px"}}
               hintStyle={{textAlign:"center"}}
               errorText={this.state.errorEmail}

             /><br />
             <SelectField
                floatingLabelText="Industry"
                floatingLabelStyle={{color:"#494848"}}
                value={this.state.industry}
                style={{width:"100%",marginTop:"-20px"}}
                onChange={this.handleSelectIndustry}
                errorText={this.state.errorIndustry}
                maxHeight={250}
              >
                {
                  idustrys.map((title, i) => {
                    return <MenuItem value={title} primaryText={title} key={i}/>
                  })
                }

              </SelectField>
            </div>


           <OptionalActions
             handleSendHelpMessage={this.handleSendHelpMessage}
             name={this.name}
             email={this.email}
             industry={this.state.industry}
             answers={this.state.answers}
             errorHelpSubmit={this.state.errorHelpSubmit}
             didHelpMessageSend= {this.state.didHelpMessageSend}
             errorHelp={this.state.errorHelp}
           />
           </div>
           <div className="div_flex_center" style={{marginTop:"50px"}}>
            <RaisedButton label="TAKE ASSESMENT" onClick={()=>this.unlockQuiz()} primary disabled={this.state.unlocked}/>
          </div>

          {(this.state.errorTakeAssesment)?(
            <p style={{textAlign:"center",color:'#ed5e53',marginTop:"30px"}} className="error_text">{this.state.errorTakeAssesment}</p>
          ):(null)}
         {(this.state.loading)?(
           <div className="circle_progress_container circle_progress_container_upper">
             <CircularProgress size={40} thickness={5} />
           </div>
         ):(null)}

        {this.renderQuestion()}

        {(this.state.unlocked)?(
            <div>
                <div className="div_flex_center" style={{marginTop:"50px"}}>
                <RaisedButton label="SUBMIT" onClick={()=>//funkciq koqto  validatva inputa i callva submitrasult
                  this.handleResultSubmit("")
                } primary/>

              </div>
              {(this.state.errorSubmit)?(
                <p style={{textAlign:"center",color:'#f24a3e',marginTop:"30px"}} className="error_text">{this.state.errorSubmit}</p>
              ):(null)}
              </div>
            ):(null)}

            </div>
          <div style={{height:"300px"}}></div>
        </div>
      </div>
    );
  }

}
