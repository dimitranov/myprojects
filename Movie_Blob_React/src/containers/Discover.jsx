/* eslint-disable */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  setData_FromSerch ,
  pickGenre,
  loadNextMovies_TITLE_ACTION,
  loadNextMovies_YEAR_ACTION,
  loadNextMovies_GENRE_ACTION,
  loadNextMovies_YEAR_AND_GENRE_ACTION,

} from '../actions/moviesActions';
import {
  setData_FromSerch_TV ,
  pickGenre_TV,
  loadNextTVShows_TITLE_ACTION,
  loadNextTVShows_YEAR_ACTION,
  loadNextTVShows_GENRE_ACTION,
  loadNextTVShows_YEAR_AND_GENRE_ACTION,

} from '../actions/tvActions';

import Movies from '../containers/Movies';
import $ from 'jquery';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card,  CardHeader, CardText} from 'material-ui/Card';
import Footer from '../components/Footer';
import CircularProgress from 'material-ui/CircularProgress';
import MoviesIcon from 'material-ui/svg-icons/action/theaters';
import TvIcon from 'material-ui/svg-icons/hardware/tv';



class Discover extends Component {

  componentWillMount() {
    this.pageCounter_MOVIE = 2;
    this.pageCounter_TV = 2;
    $(document).ready(function(){
      let offset = $(".movies_container_for_scroll").offset().top;
      setTimeout(()=>{ $(".circle_progress_container").fadeOut(200);},500)
      $('#searchForm1').on("submit",function(){
        setTimeout(()=>{
          $("html, body").animate({ scrollTop: offset }, 600);
        },1000);
      });
      $('#searchForm2').on("submit",function(){
        setTimeout(()=>{
          $("html, body").animate({ scrollTop: offset }, 600);
        },1000);
      });
    if(window.innerWidth > 700){
      $('.genre_button').on('touchstart touchend',function(e){
        $(this).toggleClass('genre_button_clicked');
      });
    }
    });
  }
  componentWillUnmount() {
    this.pageCounter_MOVIE = 2;
    this.pageCounter_TV = 2;
  }
  loadNextMovies = ( filterType_MOVIE, pageCounter_MOVIE, title , year, genre , year_genre ) => {
    switch (filterType_MOVIE) {
      case 1:
        this.props.loadNextMovies_TITLE(title,pageCounter_MOVIE);
        break;
      case 2:
        this.props.loadNextMovies_YEAR(year,pageCounter_MOVIE);
        break;
      case 3:
        this.props.loadNextMovies_GENRE(genre,pageCounter_MOVIE);
        break;
      case 4:
        this.props.loadNextMovies_GENREandYEAR(year_genre, genre ,pageCounter_MOVIE);
        break;
      default: console.log("default")
    }
    this.pageCounter_MOVIE++;
  }

  loadNextTVShows = (filterType_TV, pageCounter_TV, title , year, genre , year_genre ) => {
    console.log(filterType_TV, pageCounter_TV, title , year, genre, year_genre);
    switch (filterType_TV) {
      case 1:
        this.props.loadNextTVShows_TITLE(title,pageCounter_TV);
        break;
      case 2:
        this.props.loadNextTVShows_YEAR(year,pageCounter_TV);
        break;
      case 3:
        this.props.loadNextTVShows_GENRE(genre , pageCounter_TV);
        break;
      case 4:
        this.props.loadNextTVShows_GENREandYEAR(year_genre,genre,pageCounter_TV);
        break;
      default: console.log("default")
    }
    this.pageCounter_TV++;
  }

  chnageBG = (add,remove) => $("body").removeClass(remove).addClass(add);

  render() {
    return (
      <div>
        <div className="circle_progress_container ">
          <CircularProgress size={40} thickness={5} color="#bf2127"/>
        </div>
        <div>
        <Tabs >
            <Tab icon={<MoviesIcon/>} value="movie" label="MOVIES" onActive={()=>this.chnageBG("movie_body","tv_body")}>

          <div className="App">
            <p className="jumbotron_title">MOVIES</p>
            <div className="container_all">
          <Card className="filter_card">
            <CardHeader
              actAsExpander={true}
              iconStyle={{color:"white"}}
              showExpandableButton={true}
              children={<div>
                <p className="heading_main">Explore <span>by</span> title</p>
              </div>}
            />
            <CardText expandable={true} className="filter_cart_content">
              <p className="filter_instructions">Type a title and click enter</p>
              <form id="searchForm1" onSubmit={(e)=>{
                e.preventDefault()
                  this.props.searchTitle(this.inputTitle);
                }} className="title_search_form">
                <input type="text" onChange={(e)=>this.inputTitle=e.target.value} className="input_title" placeholder="Title"/>
              </form>
            </CardText>
            </Card>

            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={<div>
                  <p className="heading_main">Find <span>by</span> year</p>
                </div>}
              />
              <CardText expandable={true} className="filter_cart_content">
                <p className="filter_instructions">Type a year and click enter</p>
                <form id="searchForm2" onSubmit={(e)=>{
                  e.preventDefault()
                  if(this.inputYear<2019 && this.inputYear>1900){
                    this.props.searchYear(this.inputYear);
                  } else alert("Not valid year");

                }} className="title_search_form">
                    <input type="text" onChange={(e)=>this.inputYear=e.target.value} className="input_title" placeholder="Year"/>
                </form>
              </CardText>
            </Card>

            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={<div>
                  <p className="heading_main">Discover <span>by</span> ganre</p>
                </div>}
              />
              <CardText expandable={true}  className="filter_cart_content">
                <p className="filter_instructions">Click on a genre.</p>
                {
                  MoviesGenres.map((genre,index) => {
                    return <button id="genre_button" className="genre_button" onClick={()=>{
                      this.props.filterGenre(genre.id);
                    //  this.props.filterGenre(genre.id);
                    }} key={index}>{genre.name}</button>
                  })
                }
              </CardText>
            </Card>

            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={
                  <p className="heading_main">Filter <span>by</span> ganre <span>and</span><br/> Year</p>
                }
              />
              <CardText expandable={true} className="filter_cart_content">
                <p className="filter_instructions">Type a year and select a genre.</p>
                <div className="inputYearFromGenre_container"><input type="text" onChange={(e)=>this.inputYearFromGenre=e.target.value} className="input_title" placeholder="Year"/></div>
              {
                MoviesGenres.map((genre,index) => {
                  return <button id="genre_button" className="genre_button" onClick={()=>{
                    this.props.filterGenreAndYear(genre.id,this.inputYearFromGenre);
                    //this.props.filterGenreAndYear(genre.id,this.inputYearFromGenre);
                  }} key={index}>{genre.name}</button>
                })
              }
              </CardText>
            </Card>

            <div className="movies_container_for_scroll">
              <Movies data={(this.props.data_FromSerch.length>2)?this.props.data_FromSerch:[]} isTV={false}/>
            </div>

            {(this.props.data_FromSerch.length > 1)?<button className="genre_button" style={{marginTop:"45px"}} onClick={()=>this.loadNextMovies(
              this.props.filterType_MOVIE,
              this.pageCounter_MOVIE,
              this.inputTitle?this.inputTitle.split(" ").join("-"):" ",
              this.inputYear,
              this.props.currentGenrePicked,
              this.inputYearFromGenre
            )}>load more</button>:null}


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        </div>
        </Tab>

        <Tab value="tv" icon={<TvIcon/>}  label="TV SHOWS" onActive={()=>this.chnageBG("tv_body","movie_body")}>
          <div className="App">
            <p className="jumbotron_title">TV SHOWS</p>
            <div className="container_all">

          <Card className="filter_card">
            <CardHeader
              actAsExpander={true}
              iconStyle={{color:"white"}}
              showExpandableButton={true}
              children={<div>
                <p className="heading_main">Explore <span>by</span> title</p>
              </div>}
            />
            <CardText expandable={true} className="filter_cart_content">
              <p className="filter_instructions">Type a title and click enter</p>
              <form id="searchForm1" onSubmit={(e)=>{
                e.preventDefault()
                  this.props.searchTitle_TV(this.inputTitle_TV);
                }} className="title_search_form">
                <input type="text" onChange={(e)=>this.inputTitle_TV = e.target.value} className="input_title" placeholder="Title"/>
              </form>
            </CardText>
            </Card>

            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={<div>
                  <p className="heading_main">Find <span>by</span> year</p>
                </div>}
              />
              <CardText expandable={true} className="filter_cart_content">
                <p className="filter_instructions">Type a year and click enter</p>
                <form id="searchForm2" onSubmit={(e)=>{
                  e.preventDefault()
                  if(this.inputYear_TV<2019 && this.inputYear_TV>1900){
                    this.props.searchYear_TV(this.inputYear_TV);
                  } else alert("Not valid year");
                }} className="title_search_form">
                    <input type="text" onChange={(e) => this.inputYear_TV = e.target.value} className="input_title" placeholder="Year"/>
                </form>
              </CardText>
            </Card>
            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={<div>
                  <p className="heading_main">Discover <span>by</span> ganre</p>
                </div>}
              />
              <CardText expandable={true}  className="filter_cart_content">
                <p className="filter_instructions">Click on a genre.</p>
                {
                  TvGenres.map((genre,index) => {
                    return <button id="genre_button" className="genre_button" onClick={()=>{
                      this.props.filterGenre_TV(genre.id);
                      //this.props.filterGenre_TV((genre.id).toString(),genre.id);
                    }} key={index}>{genre.name}</button>
                  })
                }
              </CardText>
            </Card>

            <Card className="filter_card">
              <CardHeader
                actAsExpander={true}
                iconStyle={{color:"white"}}
                showExpandableButton={true}
                children={
                  <p className="heading_main">Filter <span>by</span> ganre <span>and</span><br/> Year</p>
                }
              />
              <CardText expandable={true} className="filter_cart_content">
                <p className="filter_instructions">Type a year and select a genre.</p>
                <div className="inputYearFromGenre_container"><input type="text" onChange={(e)=>this.inputYearFromGenre_TV=e.target.value} className="input_title" placeholder="Year"/></div>
              {
                TvGenres.map((genre,index) => {
                  return <button id="genre_button" className="genre_button" onClick={()=>{
                    this.props.filterGenreAndYear_TV((genre.id).toString(),genre.id,this.inputYearFromGenre_TV);
                //    this.props.filterGenreAndYear_TV((genre.id).toString(),genre.id,this.inputYearFromGenre_TV);
                  }} key={index}>{genre.name}</button>
                })
              }
              </CardText>
            </Card>


            <div className="movies_container_for_scroll">
              <Movies data={(this.props.data_FromSerch_TV.length>2)?this.props.data_FromSerch_TV:[]} isTV={true} />
            </div>
            {(this.props.data_FromSerch_TV.length > 1)?
              <button className="genre_button" style={{marginTop:"45px"}} onClick={()=>{
              this.loadNextTVShows(
                this.props.filterType_TV,
                this.pageCounter_TV,
                this.inputTitle_TV?this.inputTitle_TV.split(" ").join("-"):" ",
                this.inputYear_TV,
                this.props.currentGenrePicked_TV,
                this.inputYearFromGenre_TV,
              );

            }}>load more</button>:null}
            </div>
          </div>
        </Tab>



      </Tabs></div>
      <Footer/>
    </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    data_FromSerch: state.moviesReducer.data_FromSerch,
    currentGenrePicked: state.moviesReducer.currentGenrePicked,
    filterType_MOVIE: state.moviesReducer.filterType_MOVIE,

    /*TV BARIER*/
    data_FromSerch_TV: state.tvReducer.data_FromSerch_TV,
    filterType_TV: state.tvReducer.filterType_TV,
    currentGenrePicked_TV: state.tvReducer.currentGenrePicked_TV,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTitle: (title) => {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query="+title)
      .then(response => {
        console.log(response.data);
        console.log(response.data.results);
        dispatch(setData_FromSerch(response.data.results,1));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    searchYear: (year) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year="+year+"&page=1")
      .then(response => {
        dispatch(setData_FromSerch(response.data.results , 2));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    filterGenre:(genre_id) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&with_genres="+genre_id+"&page=1")
      .then(response => {
        dispatch( pickGenre(response.data.results, genre_id ,3));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    filterGenreAndYear: (genre_id,year) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&year="+year+"&with_genres="+genre_id+"&page=1")
      .then(response => {
        dispatch( pickGenre(response.data.results,genre_id,4));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },


    loadNextMovies_TITLE: (title,page) => {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query="+title+"&page="+page).then(response => {
        dispatch(loadNextMovies_TITLE_ACTION(response.data.results));
      }).catch(e => console.log(e))
    },
    loadNextMovies_YEAR: (year,page) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year="+year+"&page="+page).then(response => {
        dispatch(loadNextMovies_YEAR_ACTION(response.data.results));
      }).catch(e => console.log(e))
    },
    loadNextMovies_GENRE: (genre_id , page) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&with_genres="+genre_id+"&page="+page)
      .then(response => {
        console.log("response nextData:",response.data);
        dispatch(loadNextMovies_GENRE_ACTION(response.data.results));
      }).catch(e => console.log(e))
    },
    loadNextMovies_GENREandYEAR: (year,genre_id,page) => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&year="+year+"&with_genres="+genre_id+"&page="+page)
      .then(response => {
        console.log("response:",response.data);
        dispatch(loadNextMovies_YEAR_AND_GENRE_ACTION( response.data.results ));
      }).catch(e => console.log(e))
    },




/*TV BARIER*/
    searchTitle_TV: (title) => {
        axios.get("https://api.themoviedb.org/3/search/tv?api_key=fa155f635119344d33fcb84fb807649b&query="+title+"&page=1")
        .then(response => {
          console.log("response:",response.data);
          dispatch(setData_FromSerch_TV(response.data.results,1));
          $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
        }).catch(e => console.log(e))
    },
    searchYear_TV: (year) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&first_air_date_year="+year+"&page=1")
      .then(response => {
        console.log("response:",response.data);
        dispatch(setData_FromSerch_TV(response.data.results,2));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    filterGenre_TV:(genre_id) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&with_genres="+genre_id+"&page=1")
      .then(response => {
        console.log("response:",response.data);
        dispatch(pickGenre_TV(response.data.results,genre_id,3));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    filterGenreAndYear_TV: ( genre_id , currentGenrePicked , year) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&first_air_date_year="+year+"&with_genres="+genre_id+"&page=1")
      .then(response => {
        console.log("response:",response.data);
        dispatch(pickGenre_TV( response.data.results , currentGenrePicked , 4));
        $("html, body").animate({ scrollTop: $(".movies_container_for_scroll").offset().top }, 600);
      }).catch(e => console.log(e))
    },
    /*load more*/
    loadNextTVShows_TITLE: (title,page) => {
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=fa155f635119344d33fcb84fb807649b&query="+title+"&page="+page)
      .then(response => {
        console.log("response nextData:",response.data);
        dispatch( loadNextTVShows_TITLE_ACTION(response.data.results) );
      }).catch(e => console.log(e))
    },
    loadNextTVShows_YEAR: (year,page) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&first_air_date_year="+year+"&page="+page)
      .then(response => {
        console.log("response nextData:",response.data);
        dispatch(loadNextTVShows_YEAR_ACTION(response.data.results));
      }).catch(e => console.log(e))
    },
    loadNextTVShows_GENRE: (genre_id , page) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&with_genres="+genre_id+"&page="+page)
      .then(response => {
        console.log("response nextData:",response.data);
        dispatch(loadNextTVShows_GENRE_ACTION(response.data.results));
      }).catch(e => console.log(e))
    },
    loadNextTVShows_GENREandYEAR: (year,genre_id,page) => {
      axios.get("https://api.themoviedb.org/3/discover/tv?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&sort_by=popularity.desc&first_air_date_year="+year+"&with_genres="+genre_id+"&page="+page)
      .then(response => {
        console.log("response:",response.data);
        dispatch(loadNextTVShows_YEAR_AND_GENRE_ACTION( response.data.results ));
      }).catch(e => console.log(e))
    }
  }
}

const MoviesGenres = [{id: 12, name: "Adventure"},
{id: 16, name: "Animation"},
{id: 35, name: "Comedy"},
{id: 80, name: "Crime"},
{id: 99, name: "Documentary"},
{id: 18, name: "Drama"},
{id: 10751, name: "Family"},
{id: 14, name: "Fantasy"},
{id: 36, name: "History"},
{id: 27, name: "Horror"},
{id: 10402, name: "Music"},
{id: 9648, name: "Mystery"},
{id: 10749, name: "Romance"},
{id: 878, name: "Science Fiction"},
{id: 10770, name: "TV Movie"},
{id: 53, name: "Thriller"},
{id: 10752, name: "War"},
{id: 37, name: "Western"}];

const TvGenres = [{id: 10759, name: "Action & Adventure"},
{id: 16, name: "Animation"},
{id: 35, name: "Comedy"},
{id: 80, name: "Crime"},
{id: 99, name: "Documentary"},
{id: 18, name: "Drama"},
{id: 10751, name: "Family"},
{id: 10762, name: "Kids"},
{id: 9648, name: "Mystery"},
{id: 10763, name: "News"},
{id: 10764, name: "Reality"},
{id: 10765, name: "Sci-Fi & Fantasy"},
{id: 10766, name: "Soap"},
{id: 10767, name: "Talk"},
{id: 10768, name: "War & Politics"},
{id: 37, name: "Western"}]

export default connect(mapStateToProps,mapDispatchToProps)(Discover);
