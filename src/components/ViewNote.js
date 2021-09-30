import React, { Component } from 'react';

import "./ViewNote.css"
import TodaysDate from "./Date";

export default class ViewNote extends Component {

    constructor(props) {
      super(props);
        this.state = {
            noteDate: <TodaysDate/>,
            emotionalState: "",
            physicalState: "",
            lookingForwardTo: "",
            food: "",
        };
    }
  
render() {
    return (
      <div className="viewPost">
        <h3> {this.state.noteDate} </h3>
        <h4> How you're feeling emotionally: {this.state.emotionalState}</h4>
        <h4> How you're feeling physically:{this.state.physicalState}</h4>
        <h4> What you're looking forward to: {this.state.lookingForwardTo}</h4>
        <h4> What you ate today: {this.state.food}</h4>
      </div>
    );
    }
  }