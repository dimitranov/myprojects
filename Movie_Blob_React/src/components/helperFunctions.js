/* eslint-disable */
import React from 'react';
import $ from 'jquery';
import noPoster from '../assets/no_poster.png';
import { emailRegex } from '../config';

export function emailValidation(email, bool) {
  if (!emailRegex.test(email)) {
    $('#email_error').removeClass('error_fade_out').addClass('error_fade_in');
    bool = true;
  } else {
    $('#email_error').removeClass('error_fade_in').addClass('error_fade_out');
  }
}

export function passValidation(pass, bool) {
  if (pass !== undefined) {
    if (pass.length < 5) {
      $('#pass_error').removeClass('error_fade_out').addClass('error_fade_in');
      bool = true;
    } else {
      $('#pass_error').removeClass('error_fade_in').addClass('error_fade_out');
    }
  } else $('#pass_error').removeClass('error_fade_out').addClass('error_fade_in');
}


export function displayGanres(ganresArray) {
  let ganress;
  if (ganresArray.length >= 1) {
    ganress = ganresArray.map((ganre, index) => <span key={index}>&nbsp;{ganre.name}&nbsp;</span>);
  }
  return ganress;
}

export function beautifyDate(dataString) {
  let month = '';
  switch (dataString.substring(5, 7)) {
    case '01': month = 'Jan'; break;
    case '02': month = 'Feb'; break;
    case '03': month = 'Mar'; break;
    case '04': month = 'Apr'; break;
    case '05': month = 'May'; break;
    case '06': month = 'Jun'; break;
    case '07': month = 'Jul'; break;
    case '08': month = 'Aug'; break;
    case '09': month = 'Sep'; break;
    case '10': month = 'Oct'; break;
    case '11': month = 'Nov'; break;
    case '12': month = 'Dec'; break;
    default: return true;
  }
  return `${dataString.substring(8, 11)} ${month} ${dataString.substring(0, 4)}`;
}

export function displatMoviePoster(path) {
  if (path !== undefined && path !== null) {
    return <img alt="" src={`http://image.tmdb.org/t/p/w185/${path}`} className="movie_holder_img" />;
  } return <img alt="" src={noPoster} className="movie_holder_img" />;
}
