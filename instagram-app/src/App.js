import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { Button } from 'reactstrap';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
 
  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  addLike = (event, postId) => {
    const newData = this.state.data.map((post,index) => {
      if(post.id === postId) {
        console.log("likes", post.likes)
        post.likes++
        console.log("after likes", post.likes)
      }
      return post
    });
    console.log("newdata", newData)
    this.setState({
      data: newData
    })
  }

  addNewComment = (event, postId) => {
    const newData = this.state.data.map(post => {
      if (postId === post.id) {
        post.comments.push({
          id: Date.now(),
          username: 'travislittle',
          text: event.target.value
        })
      }
      return post;
    })
    console.log("newdata", newData)
    this.setState({data: newData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.data.map((post,index) => { 
            return <PostContainer addNewCommentTwo={this.addNewComment} addLike={this.addLike} addNewComment={this.addNewComment} post={post} postId={post.id} key={post.id}/>
        })}
      </div>
    );
  }
  
}

export default App;
