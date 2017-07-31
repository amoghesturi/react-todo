import React from 'react';
import Formsy from 'formsy-react';
import PropTypes from 'prop-types';

import TodoAdd from './TodoAdd.js';
import TodoListItem from './TodoListItem.js';
import DeleteButton from './DeleteButton.js';
import FilterInput from './FilterInput.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.filteredList.map( (item) => {
      return (
        <TodoListItem name={item.id}
          desc={item.title}
          editable={item.editable}
          onClickEdit={this.props.onClickEdit}
          editTodo={this.props.editTodo}
          checked={item.checked}
          listIndex={item.id}
          toggleCheckbox={this.props.toggleCheckbox}
          key={item.id} />
      );
    })
    return (
        <div className="container container-fluid">
          <h1 className="col-md-12 text-center">TODO LIST</h1>
          <Formsy.Form onSubmit={this.props.handleOnSubmit} ref="newTodoForm">
            <TodoAdd name="newTodo" value={{title: '', id:this.props.currentId}} placeholder="Add a new Todo item" />
            <br />
          </Formsy.Form>
          <div className="row">
            <DeleteButton className="col-md-2" delete={this.props.deleteTodo} showDeleteButton={this.props.showDeleteButton}/>
            <FilterInput className="col-md-2 col-md-offset-8"
              name="filterInput" value=""
              placeholder="Filter todos"
              onFilterInputChange={this.props.onFilterInputChange} />
          </div>
          <br />
          <br />
          {listItems}
        </div>
    );
  }
}

Todo.propTypes = {
  handleOnSubmit: PropTypes.func,
  showDeleteButton: PropTypes.bool,
  currentId: PropTypes.number,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  })),
  filteredList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  })),
  toggleCheckbox: PropTypes.func,
  onClickEdit: PropTypes.func,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  onFilterInputChange: PropTypes.func,
}

export default Todo;
