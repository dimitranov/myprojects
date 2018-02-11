const jobReducer = (state = {
  selectedJobData: null,
  previewJobCreationData: null
}, action) => {
  switch (action.type) {
    case 'FILL_SELECTED_JOB_DATA':
      state = {
        ...state,
        selectedJobData: action.payload,
      };
      break;
    case 'FILL_PREVIEW_JOB_DATA':
      state = {
        ...state,
        previewJobCreationData: action.payload,
      };
      break;
      default: return state;
  }
  return state;
};
export default jobReducer;
