import React from "react";
import { jsx } from "@emotion/core";
import { Redirect, Route, Switch } from "react-router";
import { AppPage } from "./features/AppPage";
import { CounterPage } from "./features/CounterPage";
import { RecipePage } from "./features/RecipePage";
import { RecipeDetailPage } from "./features/RecipeDetailPage";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={AppPage} />
        <Route exact={true} path="/counter" component={CounterPage} />
        <Route exact={true} path="/recipe" component={RecipePage} />
        <Route exact={true} path="/recipe/:id" component={RecipeDetailPage} />
        <Route component={this.RootRedirect} />
      </Switch>
    );
  }

  RootRedirect = () => <Redirect to="/" />;
}
