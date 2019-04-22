import {FunctionComponent, useCallback, useEffect} from "react";
import { jsx } from "@emotion/core";
import NotificationSystem, {System, Notification} from "react-notification-system";
import {Middleware} from "redux";
import {RootState} from "../store";
import {useDispatch} from "redux-react-hook";

let isMounted = false;

export const GlobalNotification: FunctionComponent = () => {
  useEffect(() => {
    if (isMounted) throw new Error("GlobalNotificationComponent was already mounted");
    isMounted = true;
  }, []);
  const dispatch = useDispatch();

  const onRef = useCallback((ref: System) => {
    dispatch(globalNotificationInitializeAction(ref));
  }, []);

  return <NotificationSystem ref={onRef}/>;
};

export const globalNotificationInitializeAction = (ref: System) => ({
  type: "globalNotificationMiddleware/globalNotificationInitializeAction" as const,
  payload: { ref }
});

export const notifyGlobally = (notification: Notification) => ({
  type: "globalNotificationMiddleware/notifyGlobally" as const,
  payload: { notification }
});

type Action = ReturnType<typeof globalNotificationInitializeAction | typeof notifyGlobally>;

export const globalNotificationMiddleware: () => Middleware<{}, RootState> = () => {
  let ref: System | undefined;
  let queue: Notification[] = [];

  return () => next => (action: Action) => {
    if (action.type === "globalNotificationMiddleware/globalNotificationInitializeAction") {
      ref = action.payload.ref;

      if (queue.length !== 0) {
        while (queue.length !== 0) {
          const q = queue.pop();
          if (q) ref.addNotification(q);
        }
      }
    }

    if (action.type === "globalNotificationMiddleware/notifyGlobally") {
      if (!ref) {
        console.warn(
          `Notification queued because Notification-System not mounted.`
        );
        queue.push(action.payload.notification);
      } else {
        ref.addNotification(action.payload.notification);
      }
    }

    next(action);
  };
};
