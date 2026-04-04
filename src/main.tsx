import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReservaProvider } from "./context/ReservaContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReservaProvider>
    <App />
    </ReservaProvider>
  </React.StrictMode>
);