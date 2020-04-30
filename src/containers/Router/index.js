import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListsPosts from "../ListsPosts";
import FeedDetails from "../FeedDetails"
import SignupPage from "../SignupPage";
import {isAuthenticated} from "../../auth"



const PrivateRoute =({component:Component,...rest})=> (
  <Route {...rest} 
  render={ props =>
    isAuthenticated() ? (
    <Component {...props}/>

  ): (
    <Redirect to ={{pathname:"/", state:{from:props.location}}}/>
  )
}/>

)



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
        <PrivateRoute exact path={routes.details} component={FeedDetails}/>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage}/>
        <PrivateRoute exact path={routes.posts} component={ListsPosts}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
