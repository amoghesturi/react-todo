import { combineReducers } from 'redux'
import todos from './todoReducers';

const todoApp = combineReducers({
  todos
})

export default todoApp;
