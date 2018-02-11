import React from 'react';
import { emailRegex } from './config';

export function emailValidation(email, bool) {
  if (!emailRegex.test(email)) {
    console.log("ERROR EMAIL");
    bool = true;
  } else {
      console.log("NO ERROR EMAIL");
  }
}

export function passValidation(pass, bool ) {
  if (pass !== undefined) {
    if (pass.length < 5) {
        console.log("ERROR Password");
      bool = true;
    } else {
        console.log("NO ERROR Password");
    }
  } else  console.log("NO ERROR Password");
}
