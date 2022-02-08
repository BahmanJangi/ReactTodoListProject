import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import GlobalState from "./containers/GlobalState";
import App from "./containers/App";

render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
