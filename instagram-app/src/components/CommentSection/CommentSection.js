import React from 'react'
import './CommentSection.css'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.postComments,
            likes: props.postLikes
        }
    }
    render() {
        return (
            <div className="engagement-container">
                <div className="engagement">
                    <i id="heart-image" class="far fa-heart sm"></i><i id="comment-image" class="far fa-comment sm"></i>
                    <p id="likes-counter">{this.state.likes} likes</p>
                </div>
                <div className="comments-container">
                    {this.state.comments.map(comment => {
                        return (
                            <div className="comment">
                                <h3>{comment.username}</h3>
                                <p>{comment.text}</p> 
                            </div>                       
                        );
                    })}
                </div>                
                <input type="textarea"/>
            </div>
        );
    };
}

export default CommentSection;