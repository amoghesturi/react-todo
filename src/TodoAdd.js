import React from 'react';
import PropTypes from 'prop-types';

class TodoAdd extends React.Component{
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();

    // call the parent function to store the new todo
    let newTodo = this.refs.inputText.value;
    if (newTodo) {
      this.props.onClickAdd(newTodo);
    }
    // clear the input text field
    this.refs.inputText.value = '';
  }

  render() {
    return (
      <div className="row">
        <input className="col-md-8 col-md-offset-1 input-lg" ref="inputText" type="text" placeholder={this.props.placeholder} />
        <button className="col-md-2 btn-lg btn-primary" onClick={this.handleOnClick}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
      </div>
    );
  }
}

TodoAdd.propTypes = {
  onClickAdd: PropTypes.func,
  placeholder: PropTypes.string
}

export default TodoAdd;
