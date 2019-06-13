import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div className="post">
            <h3>{props.post.username}</h3>
            <CommentSection postComments={props.post.comments}/>
        </div>
    );
}

export default PostContainer;