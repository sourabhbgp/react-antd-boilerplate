import React from "react";
import { Provider } from "react-redux";
import stores from "./stores";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Auth from "./containers/auth.container";
import requireAuth from "./hoc/requireAuth";

const App = () => {
  return (
    <Provider store={stores}>
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/auth" component={Auth} />
          <Route component={requireAuth(routes)} />
        </Switch>

        {
          // Route to handle 404
        }
      </BrowserRouter>
    </Provider>
  );
};

export default App;
