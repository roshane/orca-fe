import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Dashboard from "./Dashboard";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
