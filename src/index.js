import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FeatureProvider } from "./feature/FeatureProvider.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FeatureProvider>
      <App />
    </FeatureProvider>
  </React.StrictMode>
);
