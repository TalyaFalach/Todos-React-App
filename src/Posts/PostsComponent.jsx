import { React, useState } from "react";
import { Button } from "react-bootstrap";
import PostComponent from "./PostComponent";

const PostsComponent = ({ userPosts, user, addNewPost }) => {
  const [addTodoBtn, setAddTodoBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [allUserPosts, setAllUserPosts] = useState([...userPosts]);

  const handleNewPostBtn = () => {
    const newPost = {
      userId: user.id,
      title,
      body,
    };
    addNewPost(newPost);
    setAllUserPosts([...allUserPosts,newPost])
    setAddTodoBtn(!addTodoBtn);
  };

  return (
    <>
      {addTodoBtn ? (
        <div
          className="mt-3 p-4"
          style={{ border: "1px solid", boxShadow: "1px 1px 2px 2px" }}
        >
          <h5 className="display-6">Add New Post</h5>
          Title:{" "}
          <input type="text" onChange={(e) => setTitle(e.target.value)} />{" "}
          <br />
          Body: <input
            type="text"
            onChange={(e) => setBody(e.target.value)}
          />{" "}
          <br />
          <Button onClick={handleNewPostBtn} className=" m-3 btn-primary">
            Add
          </Button>
          <Button
            onClick={() => setAddTodoBtn(!addTodoBtn)}
            className=" m-3 btn-danger"
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className="mt-3">
          <hr />
          <h5 className="display-6">Posts - User {user.id}</h5>
          <hr />
          <Button
            className="btn btn-dark p-2 mt-3 mb-4"
            onClick={() => setAddTodoBtn(!addTodoBtn)}
          >
            Add New Post
          </Button>

          {allUserPosts.map((post) => {
            return <PostComponent post={post} key={post.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default PostsComponent;
