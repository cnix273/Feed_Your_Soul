import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import "./ViewNote.css"
import TodaysDate from "./Date";

export default class ViewNote extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            emotionalState: "",
            physicalState: "",
            lookingForwardTo: "",
            food: "",

        };
      }


    loadNote = submitObject => {

    axios.post('/apis/getnote', submitObject)
        .then(function (data) {
        console.log(data);
        // if (data.data.success) {
        //     this.props.authenticate();
        //     this.setState({
        //     redirectToReferrer: true
        //     });
        // } else {
        //     alert(data.data.message);
        // }
        // }.bind(this)).catch(function (err) {
        // console.log(err);
        // });

    // this.setState({
    //     username: "",
    //     password: ""
    // });
    })}
render() {
    return (
      <div className="viewPost">
        <h3> <TodaysDate/> </h3>
        <h3> How you're feeling emotionally: {this.state.emotionalState}</h3>
        <h4> How you're feeling physically:{this.state.physicalState}</h4>
        <h4> What you're looking forward to: {this.state.lookingForwardTo}</h4>
        <h4> What you ate today: {this.state.food}</h4>
        
      </div>
    );
    }
  }