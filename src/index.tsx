import {css, Global, jsx} from "@emotion/core";
import ReactDOM from "react-dom";
import {StoreContext} from "redux-react-hook";
import { store } from "./store";
import { Routes } from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {GlobalNotification} from "./features/GlobalNotification";

const APP_ID = "app";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      {[
        <GlobalNotification/>,
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
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById(APP_ID)
);
