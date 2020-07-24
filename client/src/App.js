import React, { Fragment, useState } from "react";

import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await fetch("http://localhost:5000/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }
  return (
    <Fragment>
      <div className="container">
        <InputTodo getTodos={getTodos} />
        <ListTodos getTodos={getTodos} setTodos={setTodos} todos={todos} />
      </div>
    </Fragment>
  );
}

export default App;
