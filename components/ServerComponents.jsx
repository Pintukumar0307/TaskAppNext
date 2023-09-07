
import React from "react";
import { TodoButton } from "./Clients";
import "../style/todoitem.css";

export const TodoItem = ({ title, description, id, completed }) => {
  return (
    <div className="todo">
      <div className="todo1" >
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="todo2" >
        <TodoButton id={id} completed={completed} />
      </div>
    </div>
  );
};
