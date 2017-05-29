import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }

    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  editItem(e) {
    e.preventDefault();

    // If editable, update to new value
    if(this.state.editable && this.refs.editBox.value) {
      this.props.update(this.refs.editBox.value, this.props.listIndex);
    } else if(this.state.editable) {
      this.deleteItem(e);
    }

    this.setState({
      editable: !this.state.editable
    });
  }

  deleteItem(e) {
    e.preventDefault();
    this.props.delete(this.props.listIndex);
  }

  render() {
    let input = this.state.editable;
    let btnValue = 'Edit';
    if(this.state.editable) {
      input = <input ref="editBox" type="text" defaultValue={this.props.desc} />
      btnValue = 'Update';
    } else {
      input = <p> {this.props.desc} </p>
    }

    return (
      <div>
        <input type="button" value="Delete" onClick={this.deleteItem}/>
        <input ref="updateBtn" type="button" value={btnValue} onClick={this.editItem} />
        {input}
      </div>
    )
  }
}

export default TodoListItem;
