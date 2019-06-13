import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';
import PostContent from '../PostContent/PostContent';

function PostContainer(props) {
    return (
        <div className="post">
            <div className="post-header">
                <h3>{props.post.username}</h3>
            </div>
            <PostContent contentImage={props.post.imageUrl}/>          
            <CommentSection postComments={props.post.comments}/>
        </div>
    );
}

PostContainer.propTypes = {
    post: 
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string
                })
            )

        })
    
    
        
};

export default PostContainer;