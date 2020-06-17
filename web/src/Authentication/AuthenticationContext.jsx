import React from "react";

const AuthenticationContext = React.createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    getToken: () => { }
});

export default AuthenticationContext;