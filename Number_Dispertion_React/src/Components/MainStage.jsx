import React, {Component} from "react";
import "./css/MainStage.css";
import { Link } from 'react-router-dom';
// import { DB_CONFIG } from "./../config/config";
// import firebase from "firebase/app";
// import "firebase/database";
import $ from 'jquery';


export class MainStage extends React.Component{
  constructor(props){
    super(props);
    this.addNewPlayerToFirebase = props.addNewPlayerToFirebase;
    this.incertInStageInput = this.incertInStageInput.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.restartStage = this.restartStage.bind(this);
    this.saveScoreToDB = this.saveScoreToDB.bind(this);
    this.startNewAfterScoreSave = this.startNewAfterScoreSave.bind(this);

    this.tick = this.tick.bind(this);

    // this.app = firebase.initializeApp(DB_CONFIG); //inicializirame bazata danni DB_CONFIG kum this.app
    // this.database = this.app.database().ref().child("numbers");//prisvoqwame bazata danni s ime events kum this.database


    this.stageTime = 20;
    this.stageTimeStepBack = 3;
    this.state={
      stage_input:'',
      stage_score:0,
      wanted_input: Math.floor( Math.random()*799 ) + 100,
      elapsed:0,
      buttonsS:[0,1,2,3,4,5,6,7,8,9],
      gameON:true,
      motal_stage: 1,
      // games:[]
    }

  }
  componentDidMount(){
    console.log("componentDidMount");
    /*Concerning Time Functions*/
    this.interval = setInterval(this.tick,1000);
    this.shuffleArray();
    /*Concerning Time Functions*/
    /*concerning Mucis*/
    var buttonClickSound = new Audio('https://raw.githubusercontent.com/dimitranov/myprojects/master/Audios/btnClick.mp3');
    var bgMusic = new Audio("https://raw.githubusercontent.com/dimitranov/myprojects/master/Audios/bgSong1.mp3");
    bgMusic.volume = .5;
    //bgMusic.play();
    /*concerning Mucis*/


    /*Concerning  firebase*/
    /*const prevGames = this.state.games;

    this.database.on('child_added', snap =>{
      prevGames.push({
        player_id: snap.key,
        player_name: snap.val().player_name,
        player_score: snap.val().player_score
      });

        this.setState({
          games:prevGames
        });

    });*/
    /*Concerning  firebase*/






    $(".number_button").click(function () {

        buttonClickSound.play();

        setTimeout(function () {
          buttonClickSound.pause();
          buttonClickSound.currentTime = 0;
        }, 200);

        /*second save button on click set time out to show modal_3_after_loading */
        $(".modal_3_after_loading").hide();/*hide it as default*/
        $(".player_name_validation_warning").hide();
        $(".modal_3_preloading_animation").show();

        $("#save_play_again_button").click(function () {

          $(".loader_bar_animation_parent span").addClass("loader_class_given_to_span");

          setTimeout(function () {
            $(".modal_3_preloading_animation").hide();
            $(".modal_3_after_loading").show();
            $(".loader_bar_animation_parent span").removeClass("loader_class_given_to_span");
          }, 1500);
        });
        $(".stage_input , .stage_input_dashes ").addClass("stage_input_animation").delay(300).queue(function(){
          $(this).removeClass("stage_input_animation").dequeue();
        });

          $("#nb0").addClass("nb_a_0").delay(150).queue(function(){
            $(this).removeClass("nb_a_0").dequeue();
          });
          $("#nb1").addClass("nb_a_1").delay(150).queue(function(){
            $(this).removeClass("nb_a_1").dequeue();
          });
          $("#nb2").addClass("nb_a_2").delay(150).queue(function(){
              $(this).removeClass("nb_a_2").dequeue();
          });
          $("#nb3").addClass("nb_a_3").delay(150).queue(function(){
              $(this).removeClass("nb_a_3").dequeue();
          });
          $("#nb4").addClass("nb_a_4").delay(150).queue(function(){
              $(this).removeClass("nb_a_4").dequeue();
          });
          $("#nb5").addClass("nb_a_5").delay(150).queue(function(){
              $(this).removeClass("nb_a_5").dequeue();
          });
          $("#nb6").addClass("nb_a_6").delay(150).queue(function(){
              $(this).removeClass("nb_a_6").dequeue();
          });
          $("#nb7").addClass("nb_a_7").delay(150).queue(function(){
              $(this).removeClass("nb_a_7").dequeue();
          });
          $("#nb8").addClass("nb_a_8").delay(150).queue(function(){
              $(this).removeClass("nb_a_8").dequeue();
          });
          $("#nb9").addClass("nb_a_9").delay(150).queue(function(){
              $(this).removeClass("nb_a_9").dequeue();
          });


      });

  }//componentWillMount End

  componentWillUnmount(){
    clearInterval(this.interval);
  }
  tick(){
    this.setState({elapsed: this.state.elapsed + 1 });

    if(this.state.elapsed == this.stageTime){
      clearInterval(this.interval);
      this.setState({elapsed: 0,gameON:false});


    }
  }
  generateNewStage(){
    this.setState({
      stage_input: '',
      wanted_input: Math.floor( Math.random()*799 ) + 100,
      stage_score: this.state.stage_score + 25,
      elapsed: this.state.elapsed - this.stageTimeStepBack
    });
    $('.time_and_score_container p:nth-child(2)').addClass("score_animation").delay(1000).queue(function(){
      $(this).removeClass("score_animation").dequeue();
    });
    $('.time_and_score_container p:nth-child(1)').addClass("time_animation").delay(1000).queue(function(){
      $(this).removeClass("time_animation").dequeue();
    });


  }


  restartStage(){
    this.setState({gameON:true,wanted_input: Math.floor( Math.random()*799 ) + 100,elapsed: 0,stage_input:"",stage_score:0,});
    this.interval = setInterval(this.tick,1000);
    $(".warning_low_score").hide();
  }
  //pravim  metod v parent componenta  s nqkakuv argument , posle go pradavame na child componenta kato props , posle v child vikame suotvetniq metod chrez props i mu predavame argument og child componenta
  incertInStageInput(value){
      //console.log(value);

    this.setState({stage_input: this.state.stage_input + value},()=>{



    if (this.state.stage_input == this.state.wanted_input) {
      // console.log("Niceee !!");
      $(".stage_input_container").addClass("stage_input_container_animation").delay(200).queue(function(){
          $(this).removeClass("stage_input_container_animation").dequeue();
      });
      this.generateNewStage();



    }else if(this.state.stage_input.length < this.state.wanted_input.toString().length){
    console.log("not eaqual",this.state.stage_input.length,this.state.wanted_input.toString().length);

    }else{

      clearInterval(this.interval);
      this.setState({gameON:false});
      console.log("Game Over: Wrong Number");


     }



    });




  }
  shuffleArray(){
    let tempArray = this.state.buttonsS;
    for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }
    this.setState({buttonsS:tempArray});

  }
  handleButtonClick(x){
    this.incertInStageInput(x);
    this.shuffleArray();
  }
  startNewAfterScoreSave(){
    this.setState({
       gameON:true ,
       motal_stage:1,
       wanted_input: Math.floor( Math.random()*799 ) + 100,
       elapsed: 0,
       stage_score:0,
       stage_input:""
     });

     this.interval = setInterval(this.tick,1000);
  }

  saveScoreToDB(nameInputValue,  score_state){
      this.addNewPlayerToFirebase(nameInputValue, score_state);
      this.setState({motal_stage:3},()=>{console.log(this.state.motal_stage)});

  }

  render(){
    return(
      <div >

          <div className={(this.state.gameON)?"display_none":"game_end_modal"}>

            <div className={(this.state.motal_stage == 1 )?"modal_container":"display_none"}>
                  <p>Oops!</p>
                  <p>You make a mistake...</p>
                  <p>Score: <span>{this.state.stage_score}</span></p>
                  <div className="modal_btns_container modal_btns_container1">
                    <button onClick={this.restartStage} className="modal_btn restart_btn">Restart</button>
                  </div>
                  <div className="modal_btns_container">
                    <button className="modal_btn save_btn" onClick={()=>{

                      if(this.state.stage_score < 100 ){$(".warning_low_score").show();}
                      else{ this.setState({motal_stage:2}) }

                    }}>Save</button>

                    <Link to={"/"}><button className="modal_btn quit_btn">Quit</button></Link>
                  </div>
                  <p className="warning_low_score">Sorry, your score is too low! Must be at least 100 points.</p>
            </div>


            <div className={(this.state.motal_stage == 2)?"modal_container":"display_none"}>
                  <p>Your name</p>
                  <p className="save_score_warning_p">Warning! Please add yourself only if you have a really high score, thank you.</p>
                  <p>Score: <span>{this.state.stage_score}</span></p>
                  <div  className="flex_center_div">
                    <input type="text" ref="player_name" className="player_name_input"/>
                  </div>
                  <p className="player_name_validation_warning">No player name inputed.</p>
                  <div  className="modal_btns_container">
                    <button
                      className="modal_btn save_btn"

                      onClick={()=>{
                        if(this.refs.player_name.value == ""){
                          $(".player_name_validation_warning").fadeIn();
                        }else {
                          this.saveScoreToDB(this.refs.player_name.value,this.state.stage_score)
                        }
                      }}

                      id="save_play_again_button">Save</button>
                    <Link to={"/"}><button className="modal_btn quit_btn">Quit</button></Link>
                  </div>

                </div>
              <div className={(this.state.motal_stage == 3)?"modal_container":"display_none"}>
                <div className="modal_3_preloading_animation">
                  <p>Saving ... </p>
                  <div className="loader_bar_animation_parent"><span></span></div>
                </div>
                <div className="modal_3_after_loading">

                  <p>Done</p>
                  <p>Try again now ?</p>
                  <div  className="modal_btns_container">
                    <button className="modal_btn restart_btn" onClick={this.startNewAfterScoreSave}>Play</button>
                    <Link to={"/"}><Link to={"/"}><button className="modal_btn quit_btn">Quit</button></Link></Link>
                  </div>
                </div>
              </div>



          </div>
                <div className="flex_center_div end_game_btn_container">
                  <Link to={"/"}><button className="main_stage_end_btn">End</button></Link>
                </div>
          <div className="time_and_score_container" >
            <p>{this.state.elapsed}</p>
            <p >{this.state.stage_score}</p>
          </div>
          <div className="timer_bar_container"><div className="timer_bar" style={{width: (this.state.elapsed*(100/(this.stageTime-0.998)))+"%"}}></div></div>
          <div className="flex_center_div">
            <p className="wanted_input">{this.state.wanted_input}</p>
          </div>
          <div  className="flex_center_div stage_input_container">
            <p className="stage_input">{this.state.stage_input}</p></div>
            <div  className="flex_center_div stage_input_container">
            <p className="stage_input_dashes" onClick={()=>this.setState({stage_input:""})}>___</p>
          </div>
            <div className="buttons_container">
              <div className="flex_center_div buttons_div">
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[0])}} id="nb0" className="number_button" >{this.state.buttonsS[0]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[1])}} id="nb1" className="number_button" >{this.state.buttonsS[1]}</button>
              </div>

              <div className="flex_center_div buttons_div">
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[2])}} id="nb2" className="number_button" >{this.state.buttonsS[2]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[3])}} id="nb3" className="number_button" >{this.state.buttonsS[3]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[4])}} id="nb4" className="number_button" >{this.state.buttonsS[4]}</button>
              </div>
              <div className="flex_center_div buttons_div">
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[5])}} id="nb5" className="number_button" >{this.state.buttonsS[5]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[6])}} id="nb6" className="number_button" >{this.state.buttonsS[6]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[7])}} id="nb7" className="number_button" >{this.state.buttonsS[7]}</button>
              </div>
              <div className="flex_center_div buttons_div">
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[8])}} id="nb8" className="number_button" >{this.state.buttonsS[8]}</button>
                <button  onClick={()=>{this.handleButtonClick(this.state.buttonsS[9])}} id="nb9" className="number_button" >{this.state.buttonsS[9]}</button>
              </div>

            </div>

        </div>
    );
  }
}
