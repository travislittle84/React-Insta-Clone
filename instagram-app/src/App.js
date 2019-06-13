import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { Button } from 'reactstrap';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(post => { 
              return <PostContainer post={post} />
        })}
      </div>
    );
  }
  
}

export default App;
