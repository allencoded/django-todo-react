import React, { useState, useEffect } from "react";
import "./Todos.css";
import { getTodos, editTodo } from "../services/todos";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const markCompleted = async (id) => {
    let todoIndex;
    const newTodos = todos.map((t, index)=> {
      if (t.id === id) {
        t.completed = !t.completed;
        todoIndex = index;
      }
      return t;
    });

    await editTodo(newTodos[todoIndex]);
    setTodos(newTodos);
  }

  const renderTodos = () =>
    todos.map(t => (
      <div className="todo-wrapper" key={t.id}>
        <div className="todo-checkbox">
          <input type="checkbox" defaultChecked={t.completed} onClick={() => markCompleted(t.id)} />
        </div>
        <div>
          <div className="todo-title">{t.title}</div>
          <div>{t.description}</div>
        </div>
      </div>
    ));

  return (
    <div className="todo-container">
      <div>{renderTodos()}</div>
    </div>
  );
}

export default Todos;
