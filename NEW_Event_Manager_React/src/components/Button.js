import React from 'react';
import PropTypes from 'prop-types';

const btn = {
  boxShadow: "rgba(0, 0, 0, 0.6) 0px 2px 2px",
  padding: "8px 14px",
  border: 'none',
  borderRadius: '5px',
  color: "white",
  outline:'none',
  cursor:'pointer',
}

const del = {
  backgroundColor: "rgba(255, 0, 0, 0.53)",
}
const save = {
  backgroundColor: "rgba(0, 255, 156, 0.53)",
}
const edit = {
  backgroundColor: "rgba(0, 18, 255, 0.46)",
}


const ClassName = (type) => {
  switch (type) {
    case "edit":
    return edit;
    break;
    case "del":
    return del;
    break;
    case "save":
    return save;
    break;
    default: return "btn_primary";

  }
}


const Button = ({label,type,func}) => (
  <button style={Object.assign({},btn,ClassName(type))} onClick={()=>func()}>
    {label}
  </button>
)

Button.propTypes = {
  func: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Button;
