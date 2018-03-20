$(document).ready(() => {
  let name = document.getElementById('name'),
    email = document.getElementById('email'),
    pass = document.getElementById('pass'),
    re_pass = document.getElementById('re_pass'),
    name_err = document.getElementById('name_err'),
    email_err = document.getElementById('email_err'),
    pass_err = document.getElementById('pass_err'),
    re_pass_err = document.getElementById('re_pass_err'),
    name_is_valid = false,
    email_is_valid = false,
    password_is_valid = false,
    re_password_is_valid = false;

  function validateName(string) {
    let regex = /^[a-zA-Z]+$/;
    if (!regex.test(string)) {
      name_err.style.display = "inline-block";
      name_is_valid = false;
    } else {
      name_err.style.display = "none";
      name_is_valid = true;
    }
  }

  function validateEmail(string) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(string)) {
      email_err.style.display = "inline-block";
      email_is_valid = false;
    } else {
      email_err.style.display = "none";
      email_is_valid = true;
    }
  }

  function validatePassword(string) {
    if (string.length < 5) {
      pass_err.style.display = "inline-block";
      pass_err.textContent = "Password too short."
      password_is_valid = false;
    } else if (string.length > 15) {
      pass_err.style.display = "inline-block";
      pass_err.textContent = "Password too long."
      password_is_valid = false;
    } else {
      pass_err.style.display = "none";
      password_is_valid = true;
    }
  }

  function validateRePassword(_pass, re_pass) {
    if (typeof(_pass.value) == "string" && _pass.value.length == 1 || re_pass !== _pass) {
      re_pass_err.style.display = "inline-block";
      re_password_is_valid = false;
    } else {
      re_pass_err.style.display = "none";
      re_password_is_valid = true;
    }
  }
  document.forms[0].addEventListener('submit', (e) => {
    validateName(name.value);
    validateEmail(email.value);
    validateRePassword(pass.value, re_pass.value);
    validatePassword(pass.value);
    if (name_is_valid &&
      email_is_valid &&
      password_is_valid &&
      re_password_is_valid) {
      return true;
    }
    e.preventDefault();
  });

});
