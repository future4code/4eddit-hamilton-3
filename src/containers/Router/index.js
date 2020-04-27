import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListsPosts from "../ListsPosts";




export const routes = {
  root: "/",
  posts:"/posts"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.posts} component={ListsPosts}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
