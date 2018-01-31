

export function pickGenre_TV(genre_TV, currentGenrePicked_TV, filterType) {
  return {
    type: 'PICK_GENRE_TV',
    payload: genre_TV,
    currentGenrePicked_TV,
    filterType_TV: filterType,
  };
}


export function loadMoreOfGenre(dataNew) {
  return {
    type: 'LOAD_MORE_OF_GENRE',
    payload: dataNew,
  };
}


/* tv show page */
export function getTvShowInfoBasedOnId(id) {
  return {
    type: 'GET_TV_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function getTvShowYOUTUBEBasedOnId(id) {
  return {
    type: 'GET_TV_YOUTUBE_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function getTvShowSIMILARBasedOnId(id) {
  return {
    type: 'GET_TV_SIMILAR_DATA_BASED_ON_ID',
    payload: id,
  };
}
export function clearTvShowInfo() {
  return {
    type: 'CLEAR_TV_DATA_ON_UNMOUNT',
  };
}
/* tv show page */


// FromSerch start
export function setData_FromSerch_TV(data, filterType) { // filterType as argument
  return {
    type: 'SET_DATA_FROMSERCH_TV',
    payload: data,
    filterType_TV: filterType,
  };
}

export function loadNextTVShows_TITLE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_TITLE',
    payload: dataNew,
  };
}
export function loadNextTVShows_YEAR_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_YEAR',
    payload: dataNew,
  };
}
export function loadNextTVShows_GENRE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_GENRE',
    payload: dataNew,
  };
}
export function loadNextTVShows_YEAR_AND_GENRE_ACTION(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_BASE_YEAR_AND_GENRE',
    payload: dataNew,
  };
}
// FromSerch end


// Upcoming start
export function setData_Upcoming_TV(data) {
  return {
    type: 'SET_DATA_UPCOMING_TV',
    payload: data,
  };
}

export function loadNextMovies_Upcoming_TV(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_UPCOMING_TV',
    payload: dataNew,
  };
}
// Upcoming end


// Toprated start
export function setData_Toprated_TV(data) {
  return {
    type: 'SET_DATA_TOPRATED_TV',
    payload: data,
  };
}

export function loadNextMovies_Toprated_TV(dataNew) {
  return {
    type: 'LOAD_MORE_DATA_TOPRATED_TV',
    payload: dataNew,
  };
}
// Toprated end
