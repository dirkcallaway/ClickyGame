import React, { Component } from 'react';
import ScoreBar from './components/ScoreBar/';
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import PlayAgain from './components/PlayAgain';
const numbers = require ('./numbers.json')

class App extends Component {
  state = {
    numbers,
    currentScore : 0,
    highScore : 0,
    beenClicked : [],
    gameOver: false
  }

  ResetGame = () => {
    this.setState({ 
      currentScore: 0,
      gameOver: false,
      beenClicked: []
    });
    this.ShuffleCards(numbers)
  }

  ShuffleCards = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  }

  HandleClickEvent = id => {
    if(this.state.beenClicked.includes(id)) {
      this.setState({ currentScore: 0 })
      this.setState({ gameOver: true })
      if(this.state.currentScore > this.state.highScore){
        this.setState({ highScore : this.state.currentScore })
      }
      } else {
        this.setState({
          beenClicked : this.state.beenClicked.concat(id),
          currentScore : this.state.currentScore +1
        })
        this.ShuffleCards(this.state.numbers);
      }

  }

  MakeNumberCards = () => {
    return (
      this.state.numbers.map(number => {
        return (
        <PictureCard key={number.id} name={number.name} color={number.color} handleClick={this.HandleClickEvent}/>
        )
      })
    )
  }

  render() {
  return (
    <div>
      <Header />
      <ScoreBar highScore={this.state.highScore} score={this.state.currentScore}/>
      <div className="container" id="main-content">
      {this.state.gameOver && <PlayAgain reset={this.ResetGame}/>}
      <div className="flex-box">
        {this.MakeNumberCards()}
      </div>
      </div>
    </div>
  )
  }
}

export default App;
