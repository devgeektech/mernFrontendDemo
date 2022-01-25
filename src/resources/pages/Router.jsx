import { AppRoutes, AppRoutesConfig } from "@utils/configs/AppRoutes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Loader } from "semantic-ui-react";

const Router = () => {
  return (
    <React.Suspense fallback={<Loader active inline='centered' />}>
      <Switch>
        {AppRoutes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
        <Redirect from={AppRoutesConfig.HOME} to={AppRoutesConfig.LOGIN} />
      </Switch>
    </React.Suspense>
  );
};

export default Router;
