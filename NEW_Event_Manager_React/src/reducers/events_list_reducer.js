const events_list_reducer = (state = {
  eventsList: [],
  isThereError: false,
}, action) => {
  switch (action.type) {
    case 'POPULATE_EVENTS_LIST':
      state = {
        ...state,
        eventsList: action.payload,
      };
      break;
    case 'ERROR_OCCURED':
      state = {
        ...state,
        isThereError: action.payload,
      };
    case 'ERROR_UNDERSTOOD':
      state = {
        ...state,
        isThereError: action.payload,
      };
      break;
      default: return state;
  }
  return state;
};
export default events_list_reducer;
