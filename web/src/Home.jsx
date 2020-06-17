import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpClient from "./HttpClient/HttpClient";
import AuthenticationContext from "./Authentication/AuthenticationContext";

export default class Home extends Component {

    static contextType = AuthenticationContext;
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.http = new HttpClient(this.context);
    }

    async fetchData() {
        this.setState({ loading: true });
        var data = await this.http.sendDemoRequest();
        this.setState({ data: data });
        this.setState({ loading: false });
    }

    render() {
        return (<div className="App">
            <div style={{ paddingTop: "50px" }}>

                <button class="btn btn-success" onClick={() => this.fetchData()}>Fetch Data from protected API</button>

                <br />
                <br />

                <h3>
                    {this.state.loading ? "Loading..." : ""}
                </h3>
                <h3>
                    {this.state.data ? <div>Data: {this.state.data.join(",")}</div> : ""}
                </h3>

            </div>
        </div>);
    }

}