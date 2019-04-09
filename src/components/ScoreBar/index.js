import React, { Component } from "react";
import "./style.css";

function ScoreBar() {
  return (
    <div class="row scorebar">
      <div class="col s1 m6 right-align">
        <h5 class="inline">
          Current Streak:
        </h5>
        <h5 class="inline ml-2">
          **
        </h5>
      </div>
      <div class="col s1 m6">
        <h5 class="inline">
          Top Streak:
        </h5>
        <h5 class="inline ml-2">
          **
        </h5>
      </div>
    </div>
  )
}

export default ScoreBar;