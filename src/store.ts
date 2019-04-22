import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { counter } from "./features/CounterPage";
import { globalNotificationMiddleware } from "./features/GlobalNotification";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({
  counter
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(globalNotificationMiddleware()))
);

export type RootState = ReturnType<typeof reducer>;
