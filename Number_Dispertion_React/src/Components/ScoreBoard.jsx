import React from "react";
import { Link } from 'react-router-dom';
import "./css/ScoreBoard.css";
import $ from 'jquery';

export class ScoreBoard extends React.Component{
  constructor(props){
    super(props);
    this.dataBase = props.dataBase;
    this.state = {
      score_board_data:[]
    }
  }
  componentDidMount(){
    $("table tr:nth-child(1) td:nth-child(1)").css("color","red");
    console.log( this.dataBase);
    const tempArray = this.state.score_board_data

    this.dataBase.orderByChild("player_score").on('child_added', snap =>{
      tempArray.push({
        player_score: snap.val().player_score,
        player_name: snap.val().player_name
      });
      this.setState({score_board_data:tempArray});
      console.log( this.state.score_board_data);

    });
  }
  componentWillUnmount(){
  this.dataBase.off();
  }
  render(){
    return (<div>
        <div className="flex_center_div score_board_menu_btn_container"><Link to={"/"}><button className="score_board_menu_btn">Menu</button></Link></div>
        <table>
          <thead><tr><th>Name</th><th>Score</th></tr></thead>
          <tbody>
            {
              this.state.score_board_data.map((player,i)=>{
                return(
                      <tr key={i} >

                        <td>{player.player_name}</td>
                        <td>{player.player_score}</td>

                      </tr>
                    )
              }).reverse()

            }
          </tbody>
      </table>
    </div>
  )
  }
}
