import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { CatalogContextProvider } from "./context/catalog.context";
import { MobileModalProvider } from "./context/mobile-modal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CatalogContextProvider>
      <MobileModalProvider>
        <App />
      </MobileModalProvider>
    </CatalogContextProvider>
  </BrowserRouter>
);
