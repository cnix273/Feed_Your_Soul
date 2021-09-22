import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TodaysDate from "./Date";
import "./Dashboard.css"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <section id="search-content">
            <div>
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
                    <Grid item xs={12} md={6} lg={4} className="grid-card">
                        <div className="hello">
                            <a href="/about" contenteditable>
                                <h2>Title #1</h2>
                                <p>Text Content #1</p>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="grid-card">
                        <div className="hello">
                                <a href="/about" contenteditable>
                                <h4>It's a beautiful day to check in with yourself!</h4>
                                <h6><TodaysDate/></h6>
                                <h6>Today's POST-IT</h6>
                                </a>
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