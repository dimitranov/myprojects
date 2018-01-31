import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainStage }  from "./Components/MainStage";
import { StartPage } from "./Components/StartPage";
import { ScoreBoard } from "./Components/ScoreBoard";
import './App.css';
/**/
  import { DB_CONFIG } from "./config/config";
  import firebase from "firebase/app";
  import "firebase/database";
/**/
export default  class App extends Component {
  constructor(props){
    super(props);
    /**/
      this.app = firebase.initializeApp(DB_CONFIG); //inicializirame bazata danni DB_CONFIG kum this.app
      this.database = this.app.database().ref().child("numbers");//prisvoqwame bazata danni s ime events kum this.database
      this.addNewPlayerToFirebase = this.addNewPlayerToFirebase.bind(this);
      this.state ={
        games:[]
      }
    /**/
  }
  componentWillMount(){
    const prevGames = this.state.games;
// .orderByChild("player_score")
    this.database.on('child_added', snap =>{
      prevGames.push({
        player_id: snap.key,
        player_name: snap.val().player_name,
        player_score: snap.val().player_score
      });

        this.setState({
          games:prevGames
        });

    });
  }
  componentWillUnmount(){
    this.database.off();
  }
  addNewPlayerToFirebase(nameInputValue,  score_state){

    this.database.push().set({
        player_name:nameInputValue,//this.refs.player_name.value;
        player_score:score_state//this.state.stage_score
      });
  }
render(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={"/"} exact render={()=><StartPage games = {this.state.games}/>}/>
        <Route
          path={"/MainStage"}
          exact
          render={()=><MainStage addNewPlayerToFirebase={this.addNewPlayerToFirebase}/>}
        />
        <Route path={"/ScoreBoard"} exact render={()=><ScoreBoard dataBase={this.database} gamesData = {this.state.games}/>}/>
      </Switch>
    </BrowserRouter>
    )
  }
}
