import React, { Component } from 'react';
import ScoreBar from './components/ScoreBar/';
import Header from './components/Header';
import PictureBox from './components/PictureBox'

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <ScoreBar />
      <div class="container">
       <PictureBox />
      </div>
    </div>
  )
  }
}

export default App;
