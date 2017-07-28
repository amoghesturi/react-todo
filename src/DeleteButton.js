import React from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends React.Component {
  render() {
    return (
      <div className="row">
        <br />
        <br />
        <button className="col-md-2 btn btn-danger" type="button" onClick={this.props.delete}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  delete: PropTypes.func,
}

export default DeleteButton;
