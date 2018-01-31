import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Question extends Component {
  constructor(props) {
    super(props);
    this.addAnswer = props.addAnswer;
    this.count = props.count;

  }
  radioDriveTypeSelected(e, selected){
    this.addAnswer(selected, this.count )
  }

  render() {
    const radioStyles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
        width:"17%"
      },
      radioButtonLast:{
        marginBottom: 16,
        width:"11%"
      },
      radioContainer: {
        marginTop: 20,
        display: 'flex',
        justifyContent:"center"
      }
    };
    return (
      <div >

        <p style={{marginBottom:'50px'}} className="question">{this.props.title}</p>
        <div  className="radio_buttons_wraper" >
          <RadioButtonGroup name="driveType"
            defaultSelected={false}
            style={radioStyles.radioContainer}
            onChange={this.radioDriveTypeSelected.bind(this)}
            >
            <RadioButton
              value="1"
              label="1"
              labelStyle={{transform:"translate(-33px, -25px)"}}
               style={radioStyles.radioButton}
            />
            <RadioButton
              value="2"
              label="2"
              labelStyle={{transform:"translate(-33px, -25px)"}}
               style={radioStyles.radioButton}
              />
            <RadioButton
              value="3"
              label="3"
              labelStyle={{transform:"translate(-33px, -25px)"}}
               style={radioStyles.radioButton}
            />
            <RadioButton
              value="4"
              label="4"
              labelStyle={{transform:"translate(-33px, -25px)"}}
               style={radioStyles.radioButton}
            />
            <RadioButton
              value="5"
              label="5"
              labelStyle={{transform:"translate(-33px, -25px)"}}
               style={radioStyles.radioButton}
            />
            <RadioButton
              value="0"
              label="n/a"
              labelStyle={{transform:"translate(-40px, -25px)"}}
              style={radioStyles.radioButtonLast}
              />
          </RadioButtonGroup>
        </div>
      </div>
    );
  }

}

export default Question;
