import React from 'react';
import './App.css';
import {comments} from './assets/data/commentData';
import Card from './components/Card';
function App () {
  return (
    comments.map(comment => <Card commentObject={comment} />)
  )
}

export default App;
