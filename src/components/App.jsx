import React, { Component } from "react";
// import Counter from "./Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
// import { ColorPicker } from "./ColorPicker/ColorPicker";
// import TodoList from "./TodoList";
// import Form from "./Form/Form";
// import TodoListWithScss from "./TodoList/TodoListWithScss";
// import TodoEditor from "./TodoEditor/TodoEditor";
// import Filter from "./Filter";
import { LoginForm } from "./LoginForm/LoginForm";

import todos from "../db/todos.json";
// import colorPickerOptions from "../db/colorPickerOptions.json";
import shortid from "shortid";

class App extends Component {
  state = {
    todos: todos,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    // console.log(todoId);
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       console.log("Find this todo");
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };
  // handleNameChange = (e) => {
  //   this.setState({ name: e.currentTarget.value });
  // };

  // handleTagChange = (e) => {
  //   this.setState({ tag: e.currentTarget.value });
  // };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodosCount = this.getCompletedTodoCount();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Form</h1>
        {/* <Form onSubmitForm={this.formSubmitHandler} /> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div> */}

        {/* <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} /> */}

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        {/* <TodoListWithScss
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        <LoginForm />
      </>
    );
  }
}

export default App;
