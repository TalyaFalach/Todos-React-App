import React from "react";
import { Button } from "react-bootstrap";

const TodoComponent = ({ todo, updateTasks, tasks }) => {
  const handleMarkCompletedBtn = () => {
    updateTasks(todo.id);
    tasks()
  };

  return (
    <div
      className="mt-2"
      style={{
        borderRadius: "7px",
        boxShadow: "1px 1px 1px 1px",
        border: "1px solid purple",
        padding: "5px",
      }}
    >
      Title: {todo.title}
      <br />
      {todo.completed ? (
        <div>Completed: true</div>
      ) : (
        <div>
          Completed: false
          <br />
          <Button onClick={handleMarkCompletedBtn}>Mark Completed</Button>
        </div>
      )}
    </div>
  );
};

export default TodoComponent;
