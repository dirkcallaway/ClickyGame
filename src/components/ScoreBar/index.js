import React, { Component } from "react";
import "./style.css";

function ScoreBar() {
  return (
    <div class="row">
      <div class="col s1 m6">
        <h4 class="inline">
          Current Streak:
        </h4>
        <h4 class="inline ml-2">
          **
        </h4>
      </div>
      <div class="col s1 m6">
        <h4 class="inline">
          Top Streak:
        </h4>
        <h4 class="inline ml-2">
          **
        </h4>
      </div>
    </div>
  )
}

export default ScoreBar;