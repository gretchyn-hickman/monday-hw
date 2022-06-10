import React from "react";

export default class TodoForm extends React.Component {
  handeleAdd = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  render() {
    return (
      <form>
        <input />
        <button onClick={this.handleAdd}>Add Task</button>
      </form>
    );
  }
}
