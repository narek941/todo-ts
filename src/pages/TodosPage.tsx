import React, { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const shouldRemove = confirm("are you sure?");

    shouldRemove && setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Form addHandler={addHandler} />
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        removeHandler={removeHandler}
      />
    </>
  );
};
