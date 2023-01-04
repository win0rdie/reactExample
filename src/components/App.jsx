import React, { Component } from "react";
// import Counter from "./Counter";
// import { Dropdown } from "./Dropdown/Dropdown";
// import { ColorPicker } from "./ColorPicker/ColorPicker";
// import TodoList from "./TodoList";
// import Form from "./Form/Form";
import TodoListWithScss from "./TodoList/TodoListWithScss";
import TodoEditor from "./TodoEditor/TodoEditor";
import Filter from "./Filter";
import Modal from "./Modal/Modal";
// import Clock from "./CLock/Clock";
// import { LoginForm } from "./LoginForm/LoginForm";
// import Tabs from "./Tabs/Tabs";
import IconButton from "./IconButton/IconButton";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import todos from "../db/todos.json";
// import colorPickerOptions from "../db/colorPickerOptions.json";
// import tabs from "../db/tabs.json";

import shortid from "shortid";

class App extends Component {
  state = {
    todos: todos,
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    // console.log("app component did mount");
    const todosLS = localStorage.getItem("todos");
    const parsedTodosLS = JSON.parse(todosLS);
    // console.log(parsedTodosLS);
    if (parsedTodosLS) {
      this.setState({ todos: parsedTodosLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate");

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log("update field todos, write todos in localeStorage");
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    } //аналог this.toggleModal() тільки з умовами і при заповненому todos відразу відкриває add
  }

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log("App render");

    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* {showModal && (
          <Clock>
            <button type="button">Open/Close</button>
          </Clock>
        )} */}
        {/* <Tabs items={tabs} /> */}
        <h1>Form</h1>
        <IconButton type="button" aria-label="close" onClick={this.toggleModal}>
          <AddIcon width="40" height="40" fill="white" />
        </IconButton>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* <Form onSubmitForm={this.formSubmitHandler} /> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        <TodoListWithScss
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <LoginForm /> */}
      </>
    );
  }
}

export default App;
