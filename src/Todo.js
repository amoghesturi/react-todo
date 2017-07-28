import React from 'react';
import Formsy from 'formsy-react';
import remove from 'lodash.remove';

import TodoAdd from './TodoAdd.js';
import TodoListItem from './TodoListItem.js';
import DeleteButton from './DeleteButton.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentId: 0,
      showDeleteButton: false
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.checkDeleteButton = this.checkDeleteButton.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
  }

  enableEdit(id) {
    let list = [...this.state.list];
    list.forEach((item) => {
      if (item.id === id) {
        item.editable = true;
      }
    });
    this.setState({list});
  }

  editTodo(id, title) {
    let list = [...this.state.list];
    list.forEach((item) => {
      if (item.id === id) {
        item.editable = false;
        item.title = title;
      }
    });
    this.setState({list});
  }

  handleOnSubmit(data) {
    let list = this.state.list.slice(0);
    let currentId = ++this.state.currentId;
    list.push({
      id: currentId,
      title: data['new-todo'],
      completed: false,
      editable: false,
      checked: false
    });
    this.setState({ list, currentId });
    this.refs.newTodoForm.reset();
  }

  toggleCheckbox(id) {
    let stateClone = Object.assign({}, this.state)
    let withId = stateClone.list.filter((item) => item.id === id)[0];
    withId.checked = !withId.checked;
    this.setState(stateClone);
    this.checkDeleteButton()
  }

  checkDeleteButton() {
    let showDeleteButton = this.state.list.filter( (item) => item.checked ).length;
    this.setState({showDeleteButton});
  }

  deleteTodos() {
    let list = [...this.state.list];
    remove(list, (item) => item.checked);
    this.setState({list, showDeleteButton: false});
  }

  render() {
    let listItems = this.state.list.map( (item) => {
      return (
        <TodoListItem name={item.id}
          desc={item.title}
          editable={item.editable}
          onClickEdit={this.enableEdit}
          editTodo={this.editTodo}
          checked={item.checked}
          listIndex={item.id}
          toggleCheckbox={this.toggleCheckbox}
          key={item.id} />
      );
    })
    return (
        <div className="container container-fluid">
          <h1 className="col-md-12 text-center">TODO LIST</h1>
          <Formsy.Form onSubmit={this.handleOnSubmit} ref="newTodoForm">
            <TodoAdd name="new-todo" placeholder="Add a new Todo item" />
          </Formsy.Form>
          {this.state.showDeleteButton ? <DeleteButton delete={this.deleteTodos}/> : ''}
          <br />
          <br />
          {listItems}
        </div>
    );
  }
}

export default Todo;
