import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListsPosts from "../ListsPosts";
import FeedDetails from "../FeedDetails"
import SignupPage from "../SignupPage";




export const routes = {
  root: "/",
  posts:"/posts",
  details:"/posts/details",
  signup:"/signup"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.details} component={FeedDetails}/>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage}/>
        <Route exact path={routes.posts} component={ListsPosts}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
