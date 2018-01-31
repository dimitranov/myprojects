const moviesReducer = (state = {
  data_FromSerch: [],
  data_Upcoming: [],
  data_Toprated: [],
  filterType_MOVIE: 0,

  currentGenrePicked: '10759',
  thisMovieIdData: {
    genres: [
      {
        name: null,
      }, {
        name: null,
      }, {
        name: null,
      },
    ],
    release_date: '',
  },
  thisMovieIdDataYOUTUBE: {
    results: [
      {
        key: '1',
      },
    ],
  },
  thisMovieIdDataSIMILAR: [
    {
      title: 'blank',
    },
  ],
}, action) => {
  switch (action.type) {
    case 'PICK_GENRE':
      state = {
        ...state,
        data_FromSerch: action.payload,
        currentGenrePicked: action.currentGenrePicked,
        filterType_MOVIE: action.filterType_MOVIE,
      };
      break;

    case 'LOAD_MORE_OF_GENRE':
      state = {
        ...state,
        data_FromSerch: state.data.concat(action.payload),
      };
      break;

      // movie
    case 'CLEAR_MOVIE_DATA_ON_UNMOUNT':
      state = {
        ...state,
        thisMovieIdData: {
          genres: [
            {
              name: null,
            }, {
              name: null,
            }, {
              name: null,
            },
          ],
          release_date: 'hgh',
        },
        thisMovieIdDataYOUTUBE: {
          results: [
            {
              key: '1',
            }, {
              key: '2',
            },
          ],
        },
      };
      break;
    case 'GET_MOVIE_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisMovieIdData: action.payload,
      };
      break;
    case 'GET_MOVIE_YOUTUBE_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisMovieIdDataYOUTUBE: action.payload,
      };
      break;
    case 'GET_MOVIE_SIMILAR_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisMovieIdDataSIMILAR: action.payload,
      };
      break;
      // movie

      // from_serch
    case 'SET_DATA_FROMSERCH_MOVIE':
      state = {
        ...state,
        data_FromSerch: action.payload,
        filterType_MOVIE: action.filterType_MOVIE,
      };
      break;
    case 'LOAD_MORE_DATA_BASE_TITLE':
      state = {
        ...state,
        data_FromSerch: state.data_FromSerch.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_YEAR':
      state = {
        ...state,
        data_FromSerch: state.data_FromSerch.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_GENRE':
      state = {
        ...state,
        data_FromSerch: state.data_FromSerch.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_YEAR_AND_GENRE':
      state = {
        ...state,
        data_FromSerch: state.data_FromSerch.concat(action.payload),
      };
      break;
      // case "LOAD_MORE_DATA_FROMSERCH":
      //       state={
      //         ...state,
      //         data_FromSerch: state.data_FromSerch.concat(action.payload)
      //       };
      //       break;
      // from_serch

      // upcoming
    case 'SET_DATA_UPCOMING':
      state = {
        ...state,
        data_Upcoming: action.payload,
      };
      break;
    case 'LOAD_MORE_DATA_UPCOMING':
      state = {
        ...state,
        data_Upcoming: state.data_Upcoming.concat(action.payload),
      };
      break;
      // upcoming

      // Toprated
    case 'SET_DATA_TOPRATED':
      state = {
        ...state,
        data_Toprated: action.payload,
      };
      break;
    case 'LOAD_MORE_DATA_TOPRATED':
      state = {
        ...state,
        data_Toprated: state.data_Toprated.concat(action.payload),
      };
      break;
      // Toprated
    default:
      return state;
  }
  return state;
};
export default moviesReducer;
