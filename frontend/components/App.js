import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>

        <ul>
          <li>Monday HW</li>
          <li>Tuesday HW</li>
          <li>Wednesday HW</li>
          <li>Thursday HW</li>
        </ul>
        <form>
          <input />
          <button>Add Task</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}
