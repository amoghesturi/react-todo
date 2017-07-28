import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

class TodoAdd extends React.Component{
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    e.preventDefault();
    this.props.setValue(e.currentTarget.value);
  }

  render() {
    return (
      <div className="row">
        <input className="col-md-8 col-md-offset-1 input-lg"
          type="text"
          ref="newTodo"
          value={this.props.getValue() || ''}
          onChange={this.handleOnChange}
          placeholder={this.props.placeholder}
          required
        />
        <button className="col-md-2 btn-lg btn-primary"
          type="submit">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

TodoAdd.propTypes = {
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  resetValue: PropTypes.func,
  getValue: PropTypes.func,
}

export default HOC(TodoAdd);
