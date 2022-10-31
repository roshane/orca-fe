import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Dashboard from "./Dashboard";
import "./resources/css/styles.css";

let root = createRoot(document.getElementById("root"));

const renderFun = () => {
  root.render(
    <StrictMode>
      <Dashboard/>
    </StrictMode>
  );
};
renderFun();

if (module.hot) {
  module.hot.accept("./Dashboard", () => {
    console.log("accpting HMR for module App");
    renderFun();
  });
}
