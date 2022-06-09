import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./Form";

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
        <TodoList todos={todos} />
        <TodoForm />
        <button>Clear</button>
      </div>
    );
  }
}
