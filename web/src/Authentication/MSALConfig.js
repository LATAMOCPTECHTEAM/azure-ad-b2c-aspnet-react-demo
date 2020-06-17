import * as msal from "msal";

const msalConfig = {
    auth: {
        clientId: '34ed73d1-cdbb-4c34-8dd0-6358b6297129',
        authority: 'https://padasilb2c.b2clogin.com/padasilb2c.onmicrosoft.com/B2C_1_demosigin',
        validateAuthority: false,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
    }
};

const scopes = [
    "https://padasilb2c.onmicrosoft.com/app/user"
]

const msalInstance = new msal.UserAgentApplication(msalConfig);

export const MSALInstance = msalInstance;

export const Scopes = { scopes: scopes };