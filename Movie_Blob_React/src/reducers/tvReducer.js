const tvReducer = (state = {
  data_FromSerch_TV: [],
  data_Upcoming_TV: [],
  data_Toprated_TV: [],
  filterType_TV: 0,
  currentGenrePicked_TV: '10759',
  thisTvShowIdData: {
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
  thisTvShowIdDataYOUTUBE: {
    results: [
      {
        key: '1',
      },
    ],
  },
  thisTvShowIdDataSIMILAR: [
    {
      title: 'blank',
    },
  ],
}, action) => {
  switch (action.type) {
    case 'PICK_GENRE_TV':
      state = {
        ...state,
        data_FromSerch_TV: action.payload,
        currentGenrePicked_TV: action.currentGenrePicked_TV,
        filterType_TV: action.filterType_TV,
      };
      break;
    case 'LOAD_MORE_DATA_BASE_TITLE':
      state = {
        ...state,
        data_FromSerch_TV: state.data_FromSerch_TV.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_YEAR':
      state = {
        ...state,
        data_FromSerch_TV: state.data_FromSerch_TV.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_GENRE':
      state = {
        ...state,
        data_FromSerch_TV: state.data_FromSerch_TV.concat(action.payload),
      };
      break;
    case 'LOAD_MORE_DATA_BASE_YEAR_AND_GENRE':
      state = {
        ...state,
        data_FromSerch_TV: state.data_FromSerch_TV.concat(action.payload),
      };
      break;

    case 'CLEAR_TV_DATA_ON_UNMOUNT':
      state = {
        ...state,
        thisTvShowIdData: {
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
        thisTvShowIdDataYOUTUBE: {
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
    case 'GET_TV_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisTvShowIdData: action.payload,
      };
      break;
    case 'GET_TV_YOUTUBE_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisTvShowIdDataYOUTUBE: action.payload,
      };
      break;
    case 'GET_TV_SIMILAR_DATA_BASED_ON_ID':
      state = {
        ...state,
        thisTvShowIdDataSIMILAR: action.payload,
      };
      break;

      // from_serch
    case 'SET_DATA_FROMSERCH_TV':
      state = {
        ...state,
        data_FromSerch_TV: action.payload,
        filterType_TV: action.filterType_TV,
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
    case 'SET_DATA_UPCOMING_TV':
      state = {
        ...state,
        data_Upcoming_TV: action.payload,
      };
      break;
    case 'LOAD_MORE_DATA_UPCOMING_TV':
      state = {
        ...state,
        data_Upcoming_TV: state.data_Upcoming_TV.concat(action.payload),
      };
      break;
      // upcoming

      // Toprated
    case 'SET_DATA_TOPRATED_TV':
      state = {
        ...state,
        data_Toprated_TV: action.payload,
      };
      break;
    case 'LOAD_MORE_DATA_TOPRATED_TV':
      state = {
        ...state,
        data_Toprated_TV: state.data_Toprated_TV.concat(action.payload),
      };
      break;
      // Toprated
    default: return state;
  }
  return state;
};
export default tvReducer;
