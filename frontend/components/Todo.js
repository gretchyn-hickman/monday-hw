import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.name}
        {this.props.todo.done ? <span>- done</span> : <span></span>}
      </li>
    );
  }
}
export default Todo;
