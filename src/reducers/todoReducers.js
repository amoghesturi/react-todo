import remove from 'lodash.remove';

const todos = (state = {
  list: [],
  filteredList: [],
  showDeleteButton: false,
  currentId: 0
}, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      let list = [...state.list, {
        id: action.id,
        title: action.title,
        completed: false,
        editable: false,
        checked: false
      }];
      return Object.assign({}, state, {list, currentId: ++state.currentId});
    }
    case 'EDIT_TODO': {
      let list = [...state.list];
      list.forEach((item) => {
        if (item.id === action.id) {
          item.editable = false;
          item.title = action.title;
        }
      });
      return Object.assign({}, state, {list});
    }
    case 'DELETE_TODO': {
      let list = [...state.list];
      remove(list, (item) => item.checked);
      return Object.assign({}, state, {list, showDeleteButton: false});
    }
    case 'TOGGLE_CHECKBOX': {
      let list = [...state.list];
      let withId = list.filter((item) => item.id === action.id)[0];
      withId.checked = !action.checked;
      let showDeleteButton = withId.checked ? true : false;
      return Object.assign({}, state, {list, showDeleteButton});
    }
    case 'ON_CLICK_EDIT': {
      let list = [...state.list];
      let withId = list.filter((item) => item.id === action.id);
      withId.forEach( (id) => {
        id.editable = !action.editable
      });
      return Object.assign({}, state, {list});
    }
    case 'SHOW_DELETE_BUTTON': {
      let showDeleteButton = this.state.list.filter( (item) => item.checked ).length;
      return Object.assign({}, state, {showDeleteButton});
    }
    case 'FILTER_TODO': {
      let filteredList = state.list.filter( (item) => item.title.search(`${action.text}`) >= 0);
      return Object.assign({}, state, {filteredList});
    }
    default:
      return state;
  }
}

export default todos;
