import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { MobileModalProvider } from "./context/mobile-modal";
import { UserProvider } from "./context/user.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserProvider>
        <MobileModalProvider>
          <App />
        </MobileModalProvider>
    </UserProvider>
  </BrowserRouter>
);
