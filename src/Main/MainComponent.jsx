import { React, useState, useEffect } from "react";
import {
  getAll,
  findUserAndUpdate,
  checkTodos,
  removeDuplicates,
} from "../Utils/Utils";
import { Col, Container, Row } from "react-bootstrap";
import UsersComponent from "../Users/UsersComponent";
import SearchComponent from "../Search/SearchComponent";
import AddNewUserComponent from "../AddNewUserComponent/AddNewUserComponent";
//url
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const MainComponent = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [addUserBtn, setAddUserBtn] = useState(false);

  //!SearchComponent
  const [searchInput, setSearchInput] = useState("");
  const [searchInputResult, setSearchInputResult] = useState([]);
  const [border, setBorder] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: users } = await getAll(usersUrl);
      const { data: posts } = await getAll(postsUrl);
      const { data: todos } = await getAll(todosUrl);

      setUsers(users);
      setPosts(posts);
      setTodos(todos);
    };

    fetchData();
  }, []);

  const updateUser = (obj) => {
    setUsers(findUserAndUpdate(users, obj.id, obj));
  };

  const getUserAndDelete = (userId) => {
    const filteredArray = users.filter((user) => {
      return user.id !== userId;
    });
    setUsers(filteredArray);
  };

  const handleSearch = (data) => {
    setSearchInput(data);

    const searchNameResult = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(data) ||
        user.email.toLowerCase().includes(data)
      );
    });

    setSearchInputResult(searchNameResult);
  };
  const addTodo = (newTodo) => {
    newTodo.id = todos.length + 1;
    setTodos([...todos, newTodo]);
    alert("Added Successfully");
  };

  const updateTasks = (taskIdToComplete) => {
    const todosArr = todos.map((todo) => {
      if (todo.id === taskIdToComplete) {
        todo.completed = true;
      }
      return todo;
    });

    return setTodos(todosArr);
  };



  const newUser = (newUserData) => {
    newUserData.id = users.length + 1;
    setUsers([...users, newUserData]);
    alert("Added User!");
    setAddUserBtn(!addUserBtn);

    console.log(users);
  };
  //! post
  const addNewPost = (post) => {
    post.id = posts.length + 1;
    alert("Added Post!");
    return setPosts([...posts, post]);
  };

  return (
    <div>
      <Container>
        <SearchComponent callback={handleSearch} />{" "}
        <button
          className="btn btn-warning mt-3 mb-3"
          onClick={() => setAddUserBtn(!addUserBtn)}
        >
          Add New User
        </button>
        {searchInput ? (
          <Row>
            <Col>
              {searchInputResult.map((user) => {
                return (
                  <UsersComponent
                    addUserBtn={addUserBtn}
                    getUserAndDelete={getUserAndDelete}
                    updateUser={updateUser}
                    user={user}
                    key={user.id}
                    todos={todos}
                    posts={posts}
                    addTodo={addTodo}
                    addNewPost={addNewPost}
                    updateTasks={updateTasks}
                  />
                );
              })}
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              {addUserBtn ? <AddNewUserComponent newUser={newUser} /> : null}
              {users.map((user) => {
                return (
                  <UsersComponent
                    addUserBtn={addUserBtn}
                    getUserAndDelete={getUserAndDelete}
                    updateUser={updateUser}
                    key={user.id}
                    user={user}
                    todos={todos}
                    posts={posts}
                    addTodo={addTodo}
                    updateTasks={updateTasks}
                    addNewPost={addNewPost}
                  />
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MainComponent;
