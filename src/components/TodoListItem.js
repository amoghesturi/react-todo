import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  handleClickEdit(e) {
    e.preventDefault();
    if (this.props.editable && this.refs.editBox && this.refs.editBox.value) {
      this.props.editTodo(this.props.listIndex, this.refs.editBox.value);
    } else {
      this.props.onClickEdit(this.props.listIndex, this.props.editable);
    }
  }

  toggleCheckbox() {
    this.props.toggleCheckbox(this.props.listIndex, this.props.checked);
  }

  render() {
    let input;
    let btnValue = 'Edit';
    if(this.props.editable) {
      input = <input className="col-md-10"
        ref="editBox"
        type="text"
        defaultValue={this.props.desc}
      />
      btnValue = 'Update';
    } else {
      input = <p className="col-md-10" > {this.props.desc} </p>
    }

    return (
      <div className="row">
        <input type="checkbox" className="col-md-1" checked={this.props.checked} onClick={this.toggleCheckbox}/>
        {input}
        <button className="col-md-1 btn-success" ref="updateBtn" type="button" value={btnValue} onClick={this.handleClickEdit} >
          {this.props.editable ? 'Update' : <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>}
        </button>
      </div>
    )
  }
}

TodoListItem.propTypes = {
  desc: PropTypes.string,
  onClickEdit: PropTypes.func,
  listIndex: PropTypes.number,
  editTodo: PropTypes.func,
  checked: PropTypes.bool,
  editable: PropTypes.bool,
  toggleCheckbox: PropTypes.func,
}

export default TodoListItem;
