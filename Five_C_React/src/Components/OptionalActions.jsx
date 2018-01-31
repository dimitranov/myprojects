import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class OptionalActions extends Component {
  constructor(props) {
    super(props);
    this.handleSendHelpMessage = props.handleSendHelpMessage;
    this.state = {
      faqIsOpen:false,
      helpIsOpend:false,
      helpMessage:""
    }
  }
  handleOpenFAQ = () => {
    this.setState({faqIsOpen: true});
  }

  handleCloseFAQ = () => {
    this.setState({faqIsOpen: false});
  }
  handleOpenHELP = () => {
    this.setState({helpIsOpend: true});
  }

  handleCloseHELP = () => {
    this.setState({helpIsOpend: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="GOT IT"
        primary={true}
        onClick={()=>this.handleCloseFAQ()}
      />,
    ];
    const modalStyle =( window.innerWidth >= 768)?{
        width: '57%',
        maxWidth: 'none',
      }:{
        width: '95%',
        maxWidth: 'none',
      }
    return (
      <div>
        <div className="div_flex_center" style={{marginBottom:"30px"}}>
          <RaisedButton label="FAQ?" style={{margin:"14px"}} primary onClick={()=>this.handleOpenFAQ()}/>
          <RaisedButton label="HELP" style={{margin:"14px"}} primary disabled={this.state.helpIsOpend} onClick={()=>this.handleOpenHELP()}/>
        </div>
        <Dialog
          title="FAQ"
          actions={actions}
          modal={false}
          titleStyle={{paddingBottom:"5px"}}
          contentStyle={modalStyle}
          open={this.state.faqIsOpen}
          onRequestClose={this.handleCloseFAQ}
        >
          <div className="faq_dialog"><p>How will my information be used?</p>
          <p>Your responses will allow us to develop education in critical areas of the business environment; customer experience, communication, systems, processes and procedures. Collected data will be used to inform future updates and industry analysis</p>
          <p>Confidentiality</p>
          <p>All response data is confidential, stored in a secure, password-protected storage area and only seen by the Five C Model Team</p></div>
        </Dialog>

          {(this.state.helpIsOpend)?(
              <div>
            <div className='input_container'>
              <div className="div_flex_center">
                <TextField
                  hintText="Tell us about you'r problem ..."
                  floatingLabelStyle={{color:"#717171",textAlign:"center"}}
                  floatingLabelText="Help message field"
                  multiLine={true}
                  rows={3}
                  errorText={this.props.errorHelp}
                  onChange={(e)=>{this.setState({helpMessage:e.target.value})}}
                /><br />
              </div>
              <div className="div_flex_center">
                <RaisedButton label="Send" onClick={
                  ()=>{
                  this.handleSendHelpMessage(this.state.helpMessage)}} primary  style={{margin:"10px"}}/>
                <FlatButton label="Cancle" onClick={()=>this.handleCloseHELP()} primary style={{margin:"10px"}}/>
              </div>

            </div>
            {(this.props.errorHelpSubmit !== "" )?(
              <p className="error_text" style={{textAlign:"center",color:'#ed5e53',marginTop:"30px"}}>{this.props.errorHelpSubmit}</p>
            ):null}
            {(this.props.didHelpMessageSend)?(
              <p className="error_text" style={{textAlign:"center",color:'#53ed8c',marginTop:"30px"}}>Help message sended, expect response at  your email.</p>
            ):null}
          </div>
          ):(null)

        }
        <p  className="help_explained_p">If you experience any problems please return to HELP, click and comment to let us know - we will then invite you back when we know it's fixed - thanks for the support!</p>


      </div>
    );
  }

}

export default OptionalActions;
