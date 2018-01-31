const moviesSlidersReducer = (state = {
  moviesForSliders: [],
  tvForSliders: [],
}, action) => {
  switch (action.type) {
    case 'SET_MOVIES_ON_SLIDERS':
      state = {
        ...state,
        moviesForSliders: action.payload,
      };
      break;
    case 'SET_TV_ON_SLIDERS':
      state = {
        ...state,
        tvForSliders: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};
export default moviesSlidersReducer;
