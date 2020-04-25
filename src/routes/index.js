import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../containers/dashboard.container";
import user_subscribed from "../containers/user.subscribed.container";

const AllRoute = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={dashboard} />
      <Route exact strict path="/user/subscribed" component={user_subscribed} />
    </Switch>
  );
};

export default AllRoute;
