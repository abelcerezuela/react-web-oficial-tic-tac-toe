import ReactDOM from "react-dom/client";
import "./styles.css";
import { StrictMode } from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
