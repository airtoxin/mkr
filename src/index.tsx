import {css, Global, jsx} from "@emotion/core";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { hist } from "./history";
import { Routes } from "./Routes";

const APP_ID = "app";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={hist}>
      {[
        <Global
          styles={css({
            [`html, body, #${APP_ID}`]: {
              height: "100vh",
              width: "100vw",
              padding: 0,
              margin: 0
            },
            [`#${APP_ID}`]: {
              display: "flex",
              flexDirection: "column"
            }
          })}
        />,
        <Routes />
      ]}
    </ConnectedRouter>
  </Provider>,
  document.getElementById(APP_ID)
);
