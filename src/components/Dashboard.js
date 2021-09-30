import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import TodaysDate from "./Date";
import "./Dashboard.css"
// import NewNote from "./NewNote";

export default class Dashboard extends Component {

    constructor(props) {
		super(props);

		this.state = {
            date: "Wednesday, September 22, 2021",
			emotion: this.props.emotionalState,
			physicalState: "rested",
            link: ""
		};
	}

    render() {
        return (
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <section id="search-content">
                <div className="stickies">
                    {/* <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className="searchcontainer">
                                <form>
                                    <div className="form-group searchhead">
                                        <h3>Search for Investor</h3>
                                        <label htmlFor="search">Criteria</label>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.searchName}
                                            type="text"
                                            name="searchName"
                                            className="form-control"
                                            placeholder="Name.."
                                            id="search-input">
                                        </input>
                                        <br></br>
                                        <button type="submit" onClick={this.handleSubmit} className="btn btn-success">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid> */}
                    <Grid container spacing={4}>
                        <Grid item md={3} lg={2} className="grid-card">
                            <div className="hello">
                                <a href={this.state.link} contenteditable>
                                    <h3>{this.state.date}</h3>
                                    <h6>Today you felt {this.state.emotion} and {this.state.physicalState}!</h6>
                                    <br/>
                                    <h6>Click on me to view more!</h6>
                                </a>
                            </div>
                        </Grid>
                        <Grid item  md={3} lg={2} className="grid-card">
                            <div className="hello">
                                    <a href="/about" contenteditable>
                                    <h4>It's a beautiful day to check in with yourself!</h4>
                                    <h6><TodaysDate/></h6>
                                    <h6>Today's POST-IT</h6>
                                    </a>
                            </div>
                        </Grid>
                        <Grid item sm={5} md={3} lg={2} className="grid-card">
                            <div className="hello">
                                    <a href="/about" contenteditable>
                                    <h4>It's a beautiful day to check in with yourself!</h4>
                                    <h6><TodaysDate/></h6>
                                    <h6>Today's POST-IT</h6>
                                    </a>
                            </div>
                        </Grid>
                        <Grid item sm={5} md={3} lg={2} className="grid-card">
                            <div className="hello">
                                <Link to="/newpost">
                                        <h4>It's a beautiful day to check in with yourself!</h4>
                                        <h6><TodaysDate/></h6>
                                        <h6>Today's POST-IT</h6>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                    {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>{this.state.modalMessage}</p>
                    </Modal> */}
                </div>
            </section>
            </div>
        );
    }
}