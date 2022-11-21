import React from 'react'
import { Button } from "react-bootstrap";

const PostComponent = ({post}) => {
  return (
    <div
      style={{
        border: "1px solid purple",
        padding: "8px",
        
        margin: "15px",
        borderRadius:"8px"
      }}
    >
      Title: {post.title}
    </div>
  );
}

export default PostComponent

