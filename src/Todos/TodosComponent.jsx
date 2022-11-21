import React, { useState } from "react";
import TodoComponent from "./TodoComponent";
import {checkTodos} from "../Utils/Utils";

const TodosComponent = ({ userTodos, user, updateTasks, addTodo, tasks }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [alltodos, setalltodos] = useState([...userTodos]);

  const [newTodo, setNewTodo] = useState({ userId: user.id, title: "", completed:false });
  const [newTodoArr, setNewTodoArr] = useState([]);

  const openNewTodo = () => {
    setIsClicked(!isClicked);
     tasks();
  };

  const handleAddNewTodoBtn = () => {
    
    addTodo(newTodo);
    setalltodos([...alltodos, newTodo]);
    setIsClicked(!isClicked);
    setNewTodoArr([...newTodoArr, newTodo]);
     tasks();
   
  };

  return (
    <div>
      {isClicked ? (
        <div
          style={{
            margin: "15px",
            border: "1px solid black",
            padding: "8px",
            boxShadow: "2px 2px 2px 2px",
          }}
        >
          Title:{" "}
          <input
            type="text"
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <br />
          <button
            className="btn btn-danger m-2"
            onClick={() => setIsClicked(!isClicked)}
          >
            Cancel
          </button>
          <button className="btn btn-success m-2" onClick={handleAddNewTodoBtn}>
            Add
          </button>
        </div>
      ) : (
        <>
          <hr />
          <div className="display-6">Todos - User {user.id}</div>
          <hr />
          <button
            className="btn btn-dark p-2 mt-4 mb-4"
            onClick={(openNewTodo)}
          >
            Add New Task
          </button>

          {alltodos.map((todo, index) => {
            return (
              <TodoComponent
                tasks={tasks}
                todo={todo}
                key={index}
                updateTasks={updateTasks}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodosComponent;
