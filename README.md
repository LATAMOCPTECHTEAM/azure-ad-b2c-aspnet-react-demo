# Azure AD B2C (React + ASPNETCore WebAPI)

This samples shows an option to make the Azure AD B2C integration, enabling the ReactJS frontend to get tokens directly from Azure AD B2C (using [msal](https://github.com/AzureAD/microsoft-authentication-library-for-js)) and the ASPNETCore backend to validate users with this token.



## Configure Azure AD B2C

### Step 1: 
 Create the Azure AD B2C as explained [here](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

### Step 2:
 Register a web application as explained [here](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga)

 * **Take note of the Application Id**

### Step 2.1:
 * After creating the application, go to the Authentication Tab and click on the ```Add a platform``` button.
 * Add a new Single Page Applicaiton Url, containing the value: ```http://localhost:3000``` and Save.
 * This value is the url for the application running locally, for a production environment be sure to add your DNS/IP address before publishing.

### Step 2.2:
* Go to the Expose and API tab
* First of all, set your App ID URI.
  
  Example: ```https://yourdomain.onmicrosoft.com/api```

* Add a new Scope, this will be used later to get the access tokens .
 
  Example: ```https://yourdomain.onmicrosoft.com/api/user```

 * **Take note of the Scope URL**

### Step 2.3:
* Go to the API Permissions Tab, than Add Permission.
* Select the My APIs Tab, and than select your App Registration and the the scope you created earlier.
* Click on the ```Grant admin consent for *your tenant*``` button.

### Step 3:
Create the User Sign and Password Reste flows as explained [here](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)

* Take note of the flow names

## Configuring the React Frontend

1. Open the file ```web\src\Authentication\MSALConfig.js```
2. On the client Id, put the application id you took note on the step 2
3. On the authority use the following format, https://yourdomain.b2clogin.com/yourdomain.onmicrosoft.com/signinupflowname. * The sign in/up you took note on step 3
4. Under the scopes variable, add the scope url you took note on the Step 2.2

## Configuring ASPNETCore Backend

1. Open the file ```api\B2CDemo\B2CDemo.API\appsettings.json```

```
  "Instance": "https://yourdomain.b2clogin.com",           // Fill with your b2c domain 
  "ClientId": "34ed73d1-cdbb-4c34-8dd0-6358b6297129",      // The application Id you took note on step 2
  "CallbackPath": "/signin-oidc",                          
  "Domain": "yourdomain.onmicrosoft.com",                  // Fill with your b2c domain
  "SignUpSignInPolicyId": "B2C_1_demosigin",               // The sign in/up flow name you took note on step 3
  "ResetPasswordPolicyId": "B2C_1_demoreset",              // The reset password flow name you took note on step 3
  "EditProfilePolicyId": "B2C_1_demoedit"                  // The edit profile flow name you took note on step 3
``` 


### Run the Projects
#### React Frontend
Inside the web folder, run ```yarn start```

#### ASPNETCore Backend
Inside the api folder, run ```dotnet run --project B2CDemo.API\B2CDemo.API.csproj```


### Authentication Logic

The authentication logic and methods are under the ```web\src\Authentication\WithAuthentication.jsx``` file.


