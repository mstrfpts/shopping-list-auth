import React from "react";
import ReactDOM from "react-dom";
import AuthContainer from "./AuthContainer";
import App from "./App";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(config);

const Root = () => (
  //<AuthContainer />;
  <App />
);

ReactDOM.render(<Root />, document.getElementById("root"));
