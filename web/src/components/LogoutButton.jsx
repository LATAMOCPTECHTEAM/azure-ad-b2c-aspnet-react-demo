import React, { Component } from 'react';
import AuthenticationContext from "../Authentication/AuthenticationContext";

export default class LogginButton extends Component {
    static contextType = AuthenticationContext;

    render() {
        return (
            <button class="btn btn-danger btn-sm" onClick={() => this.context.logout()}>Logout</button>
        );
    }
}