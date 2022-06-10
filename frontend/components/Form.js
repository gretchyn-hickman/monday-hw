import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  doAdd = (e) => {
    e.preventDefault();
    console.log("submit");
    this.props.handleAdd(this.state.input);
  };
  doChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <input onChange={this.doChange} />
        <button onClick={this.doAdd}>Add Task</button>
      </form>
    );
  }
}
export default TodoForm;
