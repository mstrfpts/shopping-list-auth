import React from "react";
import {
  withAuthenticator,
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import App from "./App";

const AuthContainer = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "username/email",
            placeholder: "username/email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "password",
            required: true,
          },
          //{
          /*
            type: "phone_number",
            label: "Custom Phone Label",
            placeholder: "custom Phone placeholder",
            required: false,
          */
          //},
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      <App />
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
};

export default AuthContainer;
//export default withAuthenticator(App);
