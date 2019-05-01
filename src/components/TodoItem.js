import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'

class TodoItem extends Component {

  render() {
    const { id, title } = this.props.todoInfo;
    return (
      <tr>
        <td>
          <input type="checkbox" name="checkbox"
            checked={this.props.todoInfo.done ? true : false}
            onChange={() => this.props.toggleTodo({ id })} />
        </td>
        <td>
          <ContentEditable
            html={ title }
            onChange={(e) => this.props.editTodo({ id : id, title : e.target.value })} />
        </td>
        <td>
          <span name="delete"
            className="icon icon-cancel-circled App-padding-right"
            onClick={() => this.props.deleteTodo({ id })} >
          </span>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
