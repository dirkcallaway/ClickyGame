import React from "react";
require ('./style.css')

function PlayAgain(props) {
  return(
    <div id="playAgain">
      <div className="modal-content center-align">
        <h4>Game Over</h4>
        <p>Want to play again?</p>
      </div>
      <div className="modal-footer center-align">
        <button onClick={props.reset} className="waves-effect waves-light btn">Play Again</button>
      </div>
    </div>
  )}

  export default PlayAgain;