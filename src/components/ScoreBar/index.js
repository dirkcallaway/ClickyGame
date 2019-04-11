import React from "react";
import "./style.css";

function ScoreBar(props) {
  return (
    <div className="row scorebar">
      <div className="col s1 m6 right-align">
        <h5 className="inline">
          Current Streak:
        </h5>
        <h5 className="inline ml-2">
          {props.score}
        </h5>
      </div>
      <div className="col s1 m6">
        <h5 className="inline">
          Top Streak:
        </h5>
        <h5 className="inline ml-2">
          {props.highScore}
        </h5>
      </div>
    </div>
  )
}

export default ScoreBar;