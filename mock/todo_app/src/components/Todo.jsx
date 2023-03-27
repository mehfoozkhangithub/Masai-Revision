import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";

function Todo({ handleEditClick, editFormVisibility }) {
  const todo = useSelector((state) => state.operationsReducer);
  console.log("this is the todo page console", todo);
  return (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input type="checkbox" checked={todo.completed} />
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="action-box">
        <span>
          <Icon icon={edit2} />
        </span>
        <span>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  );
}

export default Todo;
