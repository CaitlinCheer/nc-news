import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./Context/Users.jsx";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </UsersProvider>
);
