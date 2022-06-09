import React from "react";
import Todo from "./Todo";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Freshies Stickers",
          id: 1234,
          done: false,
        },
        {
          name: "Finish Homework",
          id: 1235,
          done: false,
        },
        {
          name: "Do Laundery",
          id: 1236,
          done: true,
        },
        {
          name: "Journal Entry",
          id: 1237,
          done: false,
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todo</h1>
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} />;
          })}
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
