import React from 'react';
import './PostContent.css'

function PostContent(props) {
    return (
        <div className="content">
            <img class="content-image" src={props.contentImage}/>
        </div>

    );
};

export default PostContent;