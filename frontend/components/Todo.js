import React from "react";

class Todo extends React.Component {
  changeStats = () => {
    this.props.handleDone(this.props.todo.id);
  };
  render() {
    return (
      <li key={this.props.todo.id} onClick={this.changeStats}>
        {this.props.todo.name}
        {this.props.todo.done ? <span> - done</span> : <span></span>}
      </li>
    );
  }
}
export default Todo;
