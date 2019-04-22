import React from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/core";

export interface Props {}

export class AppPage extends React.Component<Props> {
  render() {
    const style = css({
      backgroundColor: "red"
    });
    console.log("@style", style);
    return (
      <div css={style}>
        <h1>app</h1>
        <Link to="/counter">counter page</Link>
      </div>
    );
  }
}
