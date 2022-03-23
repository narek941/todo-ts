import React from "react";
import { ITodo } from "../../interfaces";
import "./TodoList.css";

type TodoListProps = {
  todos: ITodo[];
  toggleHandler: (id: number) => void;
  removeHandler: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleHandler,
  removeHandler,
}) => {
  if (todos.length === 0) {
    return <p>No todo yet</p>;
  }

  const onRemove = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    removeHandler(id);
  };
  return (
    <ul className="wrapper">
      {todos.map((todo) => {
        return (
          <li className="todos" key={todo.id}>
            <input
              className="check"
              type="checkbox"
              checked={todo.completed}
              onChange={toggleHandler.bind(null, todo.id)}
            />
            <span className="text">{todo.title}</span>
            <i onClick={(event) => onRemove(event, todo.id)}>x</i>
          </li>
        );
      })}
    </ul>
  );
};
