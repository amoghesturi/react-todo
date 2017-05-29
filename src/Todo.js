import React from 'react';
import TodoAdd from './TodoAdd.js';
import TodoListItem from './TodoListItem.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

    this.addToList = this.addToList.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addToList(item) {
    let list = this.state.list.slice(0);
    list.push(item);
    this.setState({ list });
  }

  updateListItem(desc, key) {
    let list = this.state.list.splice(0);
    list[key] = desc;
    this.setState({ list });
  }

  deleteItem(key) {
    let list = this.state.list.splice(0);
    list.splice(key, 1);
    this.setState({ list });
  }

  render() {
    let listItems = this.state.list.map( (item, i) => {
      return <TodoListItem desc={item}
        update={this.updateListItem}
        delete={this.deleteItem}
        key={i}
        listIndex={i}/>;
    })
    return <div>
      <h1 className="col-md-12 text-center">TODO LIST</h1>
      <TodoAdd placeholder="Add a new Todo item" onClickAdd={this.addToList}/>
      <br />
      <br />
      {listItems}
    </div>
  }
}

export default Todo;
