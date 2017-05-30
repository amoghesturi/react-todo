import React from 'react';
import PropTypes from 'prop-types';

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
      input = <input className="col-md-8 col-md-offset-1" ref="editBox" type="text" defaultValue={this.props.desc} />
      btnValue = 'Update';
    } else {
      input = <p className="col-md-8 col-md-offset-1" > {this.props.desc} </p>
    }

    return (
      <div className="row">
        {input}
        <button className="col-md-1 btn-danger" type="button" value="Delete" onClick={this.deleteItem}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <button className="col-md-1 btn-success" ref="updateBtn" type="button" value={btnValue} onClick={this.editItem} >
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

TodoListItem.propTypes = {
  desc: PropTypes.string,
  listIndex: PropTypes.number,
  delete: PropTypes.func,
  update: PropTypes.func
}

export default TodoListItem;
