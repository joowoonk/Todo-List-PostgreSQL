import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
const ListTodos = ({ getTodos, todos, setTodos }) => {
  console.table(todos);
  useEffect(() => {
    getTodos();
  }, []);

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      //   console.log({ res });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} getTodos={getTodos} />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.todo_id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
