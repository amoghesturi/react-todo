import React from 'react';

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
      <div>
        <input ref="inputText" type="text" placeholder={this.props.placeholder} />
        <input type="button" value="Add" onClick={this.handleOnClick} />
      </div>
    );
  }
}

export default TodoAdd;
