import React, { Component } from 'react';
import './App.css';
/*DB*/
  import "firebase/database";
  import { databaseRef } from './config/config';
/*DB*/

/*Components*/
  import Assesment from './Components/Assesment';

  import Concept from './Components/Popups/Concept';
  import Connecting from './Components/Popups/Connecting';
  import Collateral from './Components/Popups/Collateral';
  import Communication from './Components/Popups/Communication';
  import Consolidation from './Components/Popups/Consolidation';
/*Components*/

/*UI*/

  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import injectTapEventPlugin from 'react-tap-event-plugin';
  import {amber500} from 'material-ui/styles/colors';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import CircularProgress from 'material-ui/CircularProgress';
  injectTapEventPlugin();

/*UI*/


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber500,
  }
});





class App extends Component {
  constructor(){
    super();
    this.database = databaseRef.child("fivecassesment");
    this.state = {
      assesmentSubmited:false,
      popupCount:"",// ''
      popupName:""
    }
  }
  // componentWillUnmount() {
  //   this.database.off();
  // }
  submitResult = (name,email,industry,helpText,answers,time,result) => {
    this.setState({assesmentSubmited:true},()=>{
      console.log("not subbmited to  db")
      window.scrollTo(0,0)
      this.database.push().set({
         name:name,
         email:email,
         industry:industry,
         helpText:helpText,
         answers:answers,
         time:time,
         result:this.state.popupCount,
         isViewed:false
       })
    },()=>databaseRef.off())
  }
  submitHelp = (name,email,industry,helpText,answers,time,result) => {
    this.database.push().set({
       name:name,
       email:email,
       industry:industry,
       helpText:helpText,
       answers:answers,
       time:time,
       result:this.state.popupCount,
       isViewed:false
     });
     databaseRef.off();
  }
  getAnswerCalculations = (array) => {
    let answerArray = array;

    let c_1_array =[], c_2_array=[], c_3_array=[], c_4_array=[], c_5_array=[];
    for (var i = 0; i < answerArray.length; i++) {
      if(i>=0 && i<=4){ c_1_array.push(answerArray[i]) }
      if(i>=5 && i<=9){ c_2_array.push(answerArray[i]) }
      if(i>=10 && i<=14){ c_3_array.push(answerArray[i]) }
      if(i>=15 && i<=19){ c_4_array.push(answerArray[i]) }
      if(i>=20 && i<=24){ c_5_array.push(answerArray[i]) }
    }

    console.log(c_1_array, c_2_array, c_3_array,c_4_array,c_5_array);
    let sum1=0, sum2=0,sum3=0,sum4=0,sum5=0;
    for(let x in c_1_array) { sum1 += c_1_array[x] }
    for(let x in c_2_array) { sum2 += c_2_array[x] }
    for(let x in c_3_array) { sum3 += c_3_array[x] }
    for(let x in c_4_array) { sum4 += c_4_array[x] }
    for(let x in c_5_array) { sum5 += c_5_array[x] }

    let omegaArray = [ sum1, sum2, sum3, sum4, sum5 ];
    console.log(Math.min(...omegaArray), omegaArray.indexOf( Math.min(...omegaArray) ));

    this.setState({ popupCount: omegaArray.indexOf(Math.min(...omegaArray)) });

      switch(omegaArray.indexOf( Math.min(...omegaArray) )){
        case 0: { console.log("Concept");  break; }
        case 1: { console.log("Connecting");  break; }
        case 2: { console.log("Collateral");  break; }
        case 3: { console.log("Communication");  break; }
        case 4: { console.log("Consolidation");  break; }
        default: console.log("Non");
      }


  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {(!this.state.assesmentSubmited)// !
          ?
          <Assesment popupCount={this.state.popupCount} submitResult={this.submitResult} submitHelp={this.submitHelp} getAnswerCalculations={this.getAnswerCalculations}/>
          :(
            (() => {  switch(this.state.popupCount){
                        case 0: {return <Concept/>} break;
                        case 1: {return <Connecting/>} break;
                        case 2: {return <Collateral/>} break;
                        case 3: {return <Communication/>} break;
                        case 4: {return <Consolidation/>} break;
                        default: return null;
                      }
                    }
              )()
            )

          }
      </MuiThemeProvider>
    );
  }
}

export default App;
