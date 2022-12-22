import React, { Component } from "react";
// import Counter from "./Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
// import { ColorPicker } from "./ColorPicker/ColorPicker";
import TodoList from "./TodoList";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Main React", completed: true },
      { id: "id-2", text: "React Router details", completed: false },
      { id: "id-3", text: "Reduxxx", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>State component</h1>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
