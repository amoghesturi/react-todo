import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = (props) => {
  return (
    <button className={props.showDeleteButton ? 'btn btn-danger' : 'btn btn-danger disabled'}
      type="button" onClick={props.delete}>
      <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
    </button>
  );
}

DeleteButton.propTypes = {
  delete: PropTypes.func,
  showDeleteButton: PropTypes.bool,
}

export default DeleteButton;
