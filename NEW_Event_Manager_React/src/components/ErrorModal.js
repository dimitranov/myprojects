import React from 'react';
import Button from './Button';

const ErrorModal = (props) => (
  <div className="error_modal_container">
    <div>
      <p>You've missed a field, please try again.</p>
      <Button type="edit" func={props.errorUnderstood} label="Understood"/>
    </div>
  </div>
)

export default ErrorModal;
