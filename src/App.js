import React, { Component } from 'react';
import ScoreBar from './components/ScoreBar/';
import Header from './components/Header';

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <div class="container">
       <ScoreBar />
      </div>
    </div>
  )
  }
}

export default App;
