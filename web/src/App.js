import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import AuthenticationContext from "./Authentication/AuthenticationContext";
import Home from "./Home";
import LogoutButton from "./components/LogoutButton";

export default class App extends Component {
    static contextType = AuthenticationContext;
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Azure AD B2C Demo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                    <span className="navbar-text">
                        Welcome {this.context.authInfo.name}
                    </span>
                    <span className="navbar-text" style={{marginLeft: "10px"}}>
                        <LogoutButton />

                    </span>
                </nav>

                <div>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }

}