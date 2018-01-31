import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import "./css/StartPage.css";
export class StartPage extends Component {
  constructor(props){
    super(props);
    this.games = props.games;
  }
  componentDidMount(){
    console.log(  this.games);
  }
render(){
  return(
    <div>
      <p className="start_page_game_title">Number Dispertion</p>
      <div className="flex_center_div"><Link to="/MainStage"><button className="start_page_btn start_page_play_btn">Play</button></Link></div>
      <div className="score_n_screator_container">

        <Link to="/ScoreBoard"><button className="start_page_btn start_page_btn_secondary">Scores</button></Link>
        <a href="https://dimitranov.github.io/projects.html"><button className="start_page_btn start_page_btn_secondary">Creator</button></a>
      </div>
    </div>
    )
  }
}
