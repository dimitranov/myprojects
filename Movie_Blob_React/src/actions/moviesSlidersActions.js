export function setSliderMoviesOnState(data) {
  return {
    type: 'SET_MOVIES_ON_SLIDERS',
    payload: data,
  };
}

export function setSliderTvOnState(data) {
  return {
    type: 'SET_TV_ON_SLIDERS',
    payload: data,
  };
}
