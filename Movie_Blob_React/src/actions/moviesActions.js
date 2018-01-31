

export function setResponseGenres(genres) {
  return {
    type: 'SET_GENRES',
    payload: genres,
  };
}

export function pickGenre(genre, currentGenrePicked, filterType) {
  return {
    type: 'PICK_GENRE',
    payload: genre,
    currentGenrePicked,
    filterType_MOVIE: filterType,
  };
}
/* export function pickGenre_TV(genre_TV,currentGenrePicked_TV,filterType){
  return {
    type: "PICK_GENRE_TV",
    payload: genre_TV,
    currentGenrePicked_TV:currentGenrePicked_TV,
    filterType_TV:filterType
  }
} */


export function loadMoreOfGenre(dataNew) {
  return {
    type: 'LOAD_MORE_OF_GENRE',
    payload: dataNew,
  };
}

export function getMovieInfoBasedOnId(id) {
  return {
    type: 'GET_MOVIE_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function getMovieYOUTUBEBasedOnId(id) {
  return {
    type: 'GET_MOVIE_YOUTUBE_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function getMovieSIMILARBasedOnId(id) {
  return {
    type: 'GET_MOVIE_SIMILAR_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function clearMovieInfo() {
  return {
    type: 'CLEAR_MOVIE_DATA_ON_UNMOUNT',
  };
}
// FromSerch start
export function setData_FromSerch(data, filterType_MOVIE) {
  return {
    type: 'SET_DATA_FROMSERCH_MOVIE',
    payload: data,
    filterType_MOVIE,
  };
}

export function loadNextMovies_TITLE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_TITLE',
    payload: dataNew,
  };
}
export function loadNextMovies_YEAR_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_YEAR',
    payload: dataNew,
  };
}
export function loadNextMovies_GENRE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_GENRE',
    payload: dataNew,
  };
}
export function loadNextMovies_YEAR_AND_GENRE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_YEAR_AND_GENRE',
    payload: dataNew,
  };
}
// FromSerch end


// Upcoming start
export function setData_Upcoming(data) {
  return {
    type: 'SET_DATA_UPCOMING',
    payload: data,
  };
}

export function loadNextMovies_Upcoming(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_UPCOMING',
    payload: dataNew,
  };
}
// Upcoming end


// Toprated start
export function setData_Toprated(data) {
  return {
    type: 'SET_DATA_TOPRATED',
    payload: data,
  };
}

export function loadNextMovies_Toprated(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_TOPRATED',
    payload: dataNew,
  };
}
// Toprated end
