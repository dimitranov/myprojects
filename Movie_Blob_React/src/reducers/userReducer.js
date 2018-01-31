const userReducer = (state = {
  authed: false,
  myMovieList: [],
  myTvShowList: [],
}, action) => {
  switch (action.type) {
    case 'PUSH_USER_LIST_IN_STATE':
      state = {
        ...state,
        myMovieList: action.payload.myMovieList,
        myTvShowList: action.payload.myTvShowList,
      };
      break;
    case 'AUTHED_TRUE':
      state = {
        ...state,
        authed: action.payload,
      };
      break;
    case 'AUTHED_FALSE':
      state = {
        ...state,
        authed: action.payload,
      };
      break;
      default: return state;
  }
  return state;
};
export default userReducer;
