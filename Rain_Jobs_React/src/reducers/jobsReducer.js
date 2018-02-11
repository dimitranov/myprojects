const jobsReducer = (state = {
  jobList:null,
}, action) => {
  switch (action.type) {
    case 'FILL_JOB_LIST':
      state = {
        ...state,
        jobList: action.payload,
      };
      break;
      default: return state;
  }
  return state;
};
export default jobsReducer;
