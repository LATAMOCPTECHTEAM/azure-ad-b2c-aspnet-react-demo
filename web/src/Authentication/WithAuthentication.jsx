import React, { Component } from 'react';
import AuthenticationContext from "./AuthenticationContext";
import { MSALInstance, Scopes } from "./MSALConfig";
import LoginButton from '../components/LoginButton';
import "./WithAuthentication.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            authInfo: null
        }
    }

    componentDidMount() {
        let account = MSALInstance.getAccount();
        this.setState({
            isAuthenticated: !!account,
            authInfo: account
        })
    }

    logout = async () => {
        await MSALInstance.logout();
    }

    login = async () => {
        try {
            const loginResponse = await MSALInstance.loginPopup({});
            var acc = MSALInstance.getAccount();
            this.setState({ isAuthenticated: !!acc, authInfo: acc })
        } catch (error) {
            debugger;
        }
    }

    getToken = async () => {
        try {
            let accessToken = await this.acquireToken();
            return accessToken;
        } catch (error) {
            this.setState({ isAuthenticated: false, authInfo: null })
            await this.login();
            let accessToken = await this.acquireToken();
            return accessToken;
        }
    }

    acquireToken = async () => {
        try {
            var accessToken = await MSALInstance.acquireTokenSilent(Scopes);
        }
        catch (error) {
            console.log("AquireTokenSilent failure");
            var accessToken = await MSALInstance.acquireTokenRedirect(Scopes);
        }
        return accessToken;
    }

    render() {
        return (<React.Fragment>
            <AuthenticationContext.Provider value={{
                isAuthenticated: this.state.isAuthenticated,
                authInfo: this.state.authInfo,
                login: this.login,
                logout: this.logout,
                getToken: this.getToken
            }}>
                {!this.state.isAuthenticated ? <div className="auth-wall container-fluid">
                    <div>
                        <h3>Please Login to Continue</h3>
                        <br />
                        <LoginButton />
                    </div>
                </div> : this.props.children}
            </AuthenticationContext.Provider>
        </React.Fragment>)
    }
}