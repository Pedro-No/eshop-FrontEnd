import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./Context/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviderWrapper>
    <Router>
      <App />
    </Router>
  </AuthProviderWrapper>
);
