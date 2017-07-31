export const addTodo = (title, id) => ({ type: 'ADD_TODO', id, title });
export const deleteTodo = () => ({ type: 'DELETE_TODO' });
export const editTodo = (id, title) => ({ type: 'EDIT_TODO', title, id });
export const toggleCheckbox = (id, checked) => ({ type: 'TOGGLE_CHECKBOX', id, checked });
export const onClickEdit = (id) => ({ type: 'ON_CLICK_EDIT', id });
export const filterTodos = (text) => ({ type: 'FILTER_TODO', text });
