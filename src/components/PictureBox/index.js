import React, { Component } from "react";
import PictureCard from '../PictureCard'

function PictureBox() {
  return (
    <div>
      <div class="row">
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
      </div>

      <div class="row">
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
      </div>

      <div class="row">
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
        <div class="col s1 m3"><PictureCard /></div>
      </div>
    </div>
  )
}

export default PictureBox;