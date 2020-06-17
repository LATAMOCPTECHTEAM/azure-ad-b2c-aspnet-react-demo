import React, { Component } from 'react';
import AuthenticationContext from "../Authentication/AuthenticationContext";

export default class LoginButton extends Component {
    static contextType = AuthenticationContext;

    render() {
        return (
            <button class="btn btn-primary" onClick={() =>  this.context.login()}>Login</button>
        );
    }
}