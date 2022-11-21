import React, { useEffect, useState } from "react";
import "./UsersComponent.css";
import ButtonsComponent from "../ButtonsComponent/ButtonsComponent";
import { Col, Row } from "react-bootstrap";
import TodosComponent from "../Todos/TodosComponent";
import { filteredData, checkTodos } from "../Utils/Utils";
import PostsComponent from "../Posts/PostsComponent";

const UsersComponent = ({
  user,
  updateUser,
  getUserAndDelete,
  todos,
  posts,
  updateTasks,
  addTodo,
  addUserBtn,
  addNewPost,
  border,
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isIdClicked, setIsIdClicked] = useState(false);
  const [userTodos, setUserTodos] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const [tasksCompleted, setTasksCompleted] = useState(false);

  const tasks = () => {
    //get user tasks
    const filteredArray = todos.filter((todo) => todo.userId == user.id);

    const result = checkTodos(filteredArray);
    setTasksCompleted(result);
    console.log("change happened");
  };

  const handleUserIdClick = () => {
    setIsIdClicked(!isIdClicked);
    const userFilteredTodos = filteredData(todos, user.id);
    setUserTodos(userFilteredTodos);
    const userFilteredPosts = filteredData(posts, user.id);
    setUserPosts(userFilteredPosts);
     tasks();

  };

  return (
    <Row>
      <Col>
        <div
          style={{
            border: tasksCompleted ? "3px solid green" : "3px solid red",
            backgroundColor: isIdClicked ? "orange" : "white",
          }}
          className="user"
        >
          <span className=" display-6">User ID:</span>
          <span
            style={{ cursor: "pointer" }}
            onClick={handleUserIdClick}
            className="userId display-6"
          >
            {user.id}
          </span>
          <br />
          <span>Name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input"
          />
          <br />
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <br />
          <ButtonsComponent
            getUserAndDelete={getUserAndDelete}
            user={user}
            updateUser={updateUser}
            name={name}
            email={email}
            addUserBtn={addUserBtn}
          />
        </div>
      </Col>

      <Col>
        {isIdClicked ? (
          <>
            <TodosComponent
              tasks={tasks}
              userTodos={userTodos}
              user={user}
              addTodo={addTodo}
              updateTasks={updateTasks}
            />
            <PostsComponent
              addNewPost={addNewPost}
              userPosts={userPosts}
              user={user}
            />
          </>
        ) : null}
      </Col>
    </Row>
  );
};

export default UsersComponent;
