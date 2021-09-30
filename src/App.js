import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard";
import NewNote from "./components/NewNote";
import ViewNote from "./components/ViewNote";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        noteDate: "",
        emotionalState: "",
        physicalState: "",
        lookingForwardTo: "",
        food: ""
    };
  }

  loadNotes = submitObject => {

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

    this.setState({
      noteDate: "",
      emotionalState: "",
      physicalState: "",
      lookingForwardTo: "",
      food: ""
    });
  })}

  render() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            <hr />

            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/dashboard" render={props => 
                <Dashboard
                  {...props}
                    noteDate={this.state.noteDate}
                    emotionalState={this.state.emotionalState}
                    physicalState={this.state.physicalState}
                    lookingForwardTo={this.state.lookingForwardTo}
                    food={this.state.food}
                />}>
              </Route>
              <Route path="/newpost">
                  <NewNote />
              </Route>
              <Route path="/viewpostit">
                  <ViewNote />
              </Route>
            </Switch>
          </div>
        </Router>
      );
  }
}