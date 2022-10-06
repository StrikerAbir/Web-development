import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
      <div className="post">
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/posts/${id}`}>
          <button>Show details (system1)</button>
        </Link>
        <button onClick={handleNavigate}>Show details (system2)</button>
        <Link to={`/posts/${id}`}>Show details (System3)</Link>
      </div>
    );
};

export default Post;