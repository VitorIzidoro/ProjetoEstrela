import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StarProvider } from "./components/Starcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StarProvider>
    <App />
  </StarProvider>
);
