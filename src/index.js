import { render } from "react-dom";
import React from "react";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import "./css/style.css";

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept("./App.js", () => {
    const NextApp = require("./App").default;
    renderApp(NextApp);
  });
}
