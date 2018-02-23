import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const RevealFormButton = ({showForm}) => (
  <div className="add_button_container">
    <Button label="Create" func={showForm} type="save"/>
  </div>
)

RevealFormButton.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default RevealFormButton;
