import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.css'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: '',
            commentBoxValue: ''
        }
        console.log(props.postId)
    }
    componentDidMount() {
        this.setState({
            likes: this.props.postLikes
        })
    }

    changeHandler = event => {
        this.setState({commentBoxValue: event.target.value});
    }

    keyPressHandler = event => {
        if (event.key === 'Enter') {
            this.submitHandler(event)
        }
    }

    clickHandler = event => {
        if(event.target.id === "heart-image") {
            this.props.addLike(event,this.props.postId)
        }        
    }
        
    submitHandler = event => {
        this.props.addNewComment(event, this.props.postId)        
    }

    render() {
        return (
            <div className="engagement-container">
                <div className="engagement">
                    <i id="heart-image" class="far fa-heart sm" onClick={this.clickHandler}></i><i id="comment-image" class="far fa-comment sm"></i>
                    <p id="likes-counter">{this.props.postLikes} likes</p>
                </div>
                <div className="comments-container">
                    {this.props.postComments.map(comment => {
                        return (
                            <div className="comment">
                                <span className="comment-user">{comment.username} </span>
                                <span>{comment.text}</span> 
                            </div>                       
                        );
                    })}
                </div>
                <p className="timestamp">{this.props.postTimestamp}</p>
                <form onSubmit={this.submitHandler} >
                    <textarea className="comment-textbox" value={this.state.commentBoxValue} onKeyPress={this.keyPressHandler} onChange={this.changeHandler} />
                    <i class="fas fa-ellipsis-h"></i>
                </form>
                            
                
            </div>
        );
    };
}

CommentSection.propTypes = {
    postId: PropTypes.string.isRequired,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    postTimestamp: PropTypes.string.isRequired,
    postLikes: PropTypes.number.isRequired,
    postComments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ) 
}

export default CommentSection;