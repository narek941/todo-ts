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
    return <p>No todo</p>;
  }
  return (
    <ul className="wrapper">
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleHandler.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i onClick={() => removeHandler(todo.id)}>d</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
