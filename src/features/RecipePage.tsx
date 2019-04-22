import React, {useEffect, useState} from "react";
import { jsx } from "@emotion/core";
import {kyounoryouriRepository} from "../repositories/KyounoryouriRepository";
import {useDispatch} from "redux-react-hook";
import {notifyGlobally} from "./GlobalNotification";
import useRouter from "use-react-router/use-react-router";
import queryString from "query-string";

export const RecipePage: React.FunctionComponent = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { location } = useRouter();
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    kyounoryouriRepository.search({
      keywords: parsed.keywords as string[]
    })
      .then(ks => setKeywords(ks))
      .catch(
        () => dispatch(notifyGlobally({
          level: "error",
          title: "error"
        }))
      );
  }, []);

  return (
    <div>
      recipe: {keywords.map(k => (
        <span key={k}>{k}</span>
    ))}
    </div>
  );
};
