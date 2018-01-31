import React, { Component } from 'react';
import './App.css';
import UserTitle from './Components/UserTitle';
import ResultSingle from './Components/ResultSingle';
import ResultTable from './Components/ResultTable';
import OmegaData from './Components/OmegaData';
import OmegaDataMobile from './Components/OmegaDataMobile';
import Filter from './Components/Filter';

/*firebase*/
import {databaseRef} from './config/config';
/*firebase*/

/*UI*/
  import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
  import FlatButton from 'material-ui/FlatButton';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import injectTapEventPlugin from 'react-tap-event-plugin';
  import {amber500} from 'material-ui/styles/colors';
  import {Line} from 'react-chartjs-2';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import CircularProgress from 'material-ui/CircularProgress';
  import Checkbox from 'material-ui/Checkbox';
  injectTapEventPlugin();

/*UI*/


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber500,
  }
});



class App extends Component {
  constructor(props) {
    super(props);
    this.database = databaseRef.child("fivecassesment");
    this.C1Count = 0;
    this.C2Count = 0;
    this.C3Count = 0;
    this.C4Count = 0;
    this.C5Count = 0;
    this.state = {
      users:[],
      results:[],

    };
  }

  componentWillMount(){

    console.log(this.state.results);
      this.database.on('value', snap => {
        let snapData = snap.val();
        let allData = Object.keys(snapData).map(key => {
            return snapData[key];
        })
        let resultsData = Object.keys(snapData).map(key => {
            return snapData[key].result;
        })
        console.log(resultsData);
        this.setState({users: allData,results:resultsData },()=>console.log(this.state.results));
      });

  }
  showAll_noFilter = () => {
    const prevUsersArray = [];
    this.database.on('child_added', snap =>{
      prevUsersArray.push({
        id:snap.key,
        email:snap.val().email,
        helpText:snap.val().helpText,
        industry:snap.val().industry,
        name:snap.val().name,
        time:snap.val().time,
        answers:snap.val().answers,
        result:snap.val().result,
      //  result:(typeof(snap.val().result) !== "string")?(snap.val().result+1):(snap.val().result),
        isViewed:snap.val().isViewed
      })

      this.setState({
        users:prevUsersArray
      })

    })
  }
  getFiltered = (ind,res) => {
    let filteredData;

    if (ind!=="" && res!=="") {
      filteredData = this.state.users.filter(
        obj => obj.industry == ind  &&  obj.result == res
      );
    }else if(ind!==""){
      filteredData = this.state.users.filter(obj => obj.industry == ind)
    }else if( res!==""){
      filteredData = this.state.users.filter(obj => obj.result == res)
    }

    this.setState({
      users:filteredData
    })
  }

  markAsViewed = (id,bool) => {
    this.database.child(id).update({
      isViewed:bool
    });
  }


  omegaGraph=(array)=>{
    let chartDataObject = {},
      labelValues = new Array(),
    valuesArray = new Array();
    for(let i = 0; i < array.length; i++ ){
      labelValues.push((i+1).toString());
      valuesArray.push(array[i]);
    }
    chartDataObject = {
      labels:labelValues,
      datasets:[
        {
          label:"Results Graph",
          data:valuesArray,
          backgroundColor:"#19e39a"
        }
      ]
    }
    return chartDataObject
  }
  renderUser = ()=>{
    let users = this.state.users.map((user,index)=>{

      let tempArray1 = [],tempArray2 = [],tempArray3 = [],tempArray4 = [],tempArray5 = [];
      let answerArray = this.state.users[index].answers;

        for (var i = 0; i < answerArray.length; i++) {
          if(i>=0 && i<=4){ tempArray1.push(answerArray[i]) }
          if(i>=5 && i<=9){ tempArray2.push(answerArray[i]) }
          if(i>=10 && i<=14){ tempArray3.push(answerArray[i]) }
          if(i>=15 && i<=19){ tempArray4.push(answerArray[i]) }
          if(i>=20 && i<=24){ tempArray5.push(answerArray[i]) }
        }

      let resultPopup;
      switch(this.state.users[index].result){
        case 0: {resultPopup="Concept"; this.C1Count += 1;    }break;
        case 1: {resultPopup="Connecting"; this.C2Count += 1;   }break;
        case 2: {resultPopup="Collateral"; this.C3Count += 1;   }break;
        case 3: {resultPopup="Communication"; this.C4Count += 1;    }break;
        case 4: {resultPopup="Consolidation"; this.C5Count += 1;    }break;
        default: {resultPopup="";  break; };
      }

      if(user.helpText!==""){
        return (
          <div className="card_holder_wraper" key={index}>
          <div  className={(!user.isViewed)?"card_holder":"card_holder viewed_card"}><Card>
            <CardHeader
              title={<UserTitle help={true} name={user.name} email={user.email} industry={user.industry} resultPopup={resultPopup}/> }
              subtitle={<p className="time">{user.time}</p>}
              actAsExpander={true}
              showExpandableButton={true}
            /><CardText expandable={true}>
              <div className="expandable_wraper">
                <p className="rated_responses">Help Message</p>
                <p className="help_message_p">{user.helpText}</p>
              </div>
            </CardText>
          </Card>
        </div>
      </div>)
      }else  return (
        <div className="card_holder_wraper" key={index}>
          <div className="card_holder">
            <Card>
              <CardHeader
                title={<UserTitle  name={user.name} email={user.email} industry={user.industry} resultPopup={resultPopup}/> }
                subtitle={<p className="time">{user.time}</p>}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                <div className="expandable_wraper">

  <br/>
                  {(window.innerWidth >=1000)?(
                    <ResultTable
                      array1={tempArray1}
                      array2={tempArray2}
                      array3={tempArray3}
                      array4={tempArray4}
                      array5={tempArray5}
                      total1={tempArray1.reduce((a, b) => {return a + b} )}
                      total2={tempArray2.reduce((a, b) => {return a + b} )}
                      total3={tempArray3.reduce((a, b) => {return a + b} )}
                      total4={tempArray4.reduce((a, b) => {return a + b} )}
                      total5={tempArray5.reduce((a, b) => {return a + b} )}

                    />
                  ):(<div>
                    <ResultSingle title="Concept" array={tempArray1} total={tempArray1.reduce((a, b) => {return a + b} )}/>
                    <ResultSingle title="Connecting"  array={tempArray2} total={tempArray2.reduce((a, b) => {return a + b} )}/>
                    <ResultSingle title="Collateral" array={tempArray3} total={tempArray3.reduce((a, b) => {return a + b} )}/>
                    <ResultSingle title="Communication" array={tempArray4} total={tempArray4.reduce((a, b) => {return a + b} )}/>
                    <ResultSingle title="Consolidation" array={tempArray5} total={tempArray5.reduce((a, b) => {return a + b} )}/>
                    </div>
                  )}
                  <p>The user got lowest result on <span >{resultPopup}</span></p>
                <p>{user.helpText}</p>
                <div  className="graph_container">
                <Line data={this.omegaGraph(answerArray)}
                  width={200}
                  height={150}
                  options={{
                		maintainAspectRatio: false
                	}}
                  /></div>

                  </div>
              </CardText>
            </Card>
          </div>
          </div>
        )
      }).reverse();
//this.setState({C1Count:C1Count,C2Count:C2Count,C3Count:C3Count,C4Count:C4Count,C5Count:C5Count});


      return users;

  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

      <div className="App">
        <p className="page_title">Five C Model Online Assessment Result Data</p>
        <p className="page_title_minior">Total participants: <span>{this.state.users.length}</span></p>
        {(window.innerWidth >= 1000)?<OmegaData results={this.state.results}/>:<OmegaDataMobile data={this.state.results}/> }

        {(window.innerWidth >= 1000)?<div><Filter showAll_noFilter={this.showAll_noFilter} getFiltered={this.getFiltered}/>
        {<p className="page_title_minior">Found <span>{this.state.users.length}</span> results</p>}</div>:null}
        { this.renderUser()}
        <div style={{height:"500px"}}></div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
