import { connect } from 'react-redux';
import Todo from '../components/Todo.js';
import { addTodo, toggleCheckbox, onClickEdit, editTodo,
  deleteTodo, filterTodos } from '../actions';

const mapStateToProps = (state=[]) => ({
  list: state.todos.list,
  filteredList: state.todos.filteredList,
  currentId: state.todos.currentId,
  showDeleteButton: state.todos.showDeleteButton,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnSubmit: data => {
    dispatch(addTodo(data.newTodo.title, data.newTodo.id))
    dispatch(filterTodos(''));
  },
  toggleCheckbox: (id, checked) => dispatch(toggleCheckbox(id, checked)),
  onClickEdit: (id) => dispatch(onClickEdit(id)),
  editTodo: (id, title) => {
    dispatch(editTodo(id, title)),
    dispatch(filterTodos(''));
  },
  deleteTodo: () => {
    dispatch(deleteTodo());
    dispatch(filterTodos(''));
  },
  onFilterInputChange: (text) => dispatch(filterTodos(text)),
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
