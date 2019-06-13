import React from 'react'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.postComments
        }
    }
    render() {
        return (
            <div className="comments-container">
                {this.state.comments.map(comment => {
                    return (
                        <div className="comment">
                            <h3>Comment From: {comment.username}</h3>
                            <p>{comment.text}</p> 
                        </div>                       
                    );
                })}
                <input type="textarea"/>
            </div>
        );
    };
}

export default CommentSection;