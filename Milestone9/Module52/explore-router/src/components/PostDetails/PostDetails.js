import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { title, body, userId, id } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default PostDetails;