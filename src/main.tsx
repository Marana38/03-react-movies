import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>
);
