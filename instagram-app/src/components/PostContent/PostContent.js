import React from 'react';
import PropTypes from 'prop-types';
import './PostContent.css'

function PostContent(props) {
    return (
        <div className="content">
            <img class="content-image" src={props.contentImage}/>
        </div>

    );
};
// PostContent.PropTypes = {
//     contentImage: PropTypes.string.isRequired
// }

export default PostContent;