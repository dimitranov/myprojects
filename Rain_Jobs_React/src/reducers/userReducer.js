const userReducer = (state = {
  authed: false,
}, action) => {
  switch (action.type) {
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
