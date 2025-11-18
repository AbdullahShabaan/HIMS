import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./localization/LanguageProvider.tsx";
import HtmlDirection from "../src/utils/HtmlDirection.tsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HtmlDirection>
        <App />
      </HtmlDirection>
    </LanguageProvider>
  </React.StrictMode>
);
