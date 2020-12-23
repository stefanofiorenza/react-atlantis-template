import React from "react";
import { Redirect, Route, Switch } from "react-router";
//Components
import * as Header from "./Header";
//Pages
const DashboardPage = React.lazy(() =>
  import("../../pages/panel/Dashboard/DashboardPage")
);
const BlankPage = React.lazy(() =>
  import("../../pages/panel/Dashboard/BlankPage")
);
const AccountPage = React.lazy(() =>
  import("../../pages/panel/Account/AccountPage")
);
const SettingsPage = React.lazy(() =>
  import("../../pages/panel/Account/SettingsPage")
);
//Roots
const ErrorPage = React.lazy(() =>
  import("../../pages/roots/errors/ErrorPage")
);

export default function Routes() {
  const suffix = "/panel";
  return (
    <Switch>
      {/**Routes */}
      <Route
        path={suffix + "/dashboard"}
        render={(props) => <DashboardPage {...props} Header={Header} />}
        exact
      />
      <Route
        path={suffix + "/blank"}
        render={(props) => <BlankPage {...props} Header={Header} />}
        exact
      />
      {/**Account */}
      <Route
        path={suffix + "/account"}
        render={(props) => <AccountPage {...props} Header={Header} />}
        exact
      />
      <Route
        path={suffix + "/settings"}
        render={(props) => <SettingsPage {...props} Header={Header} />}
        exact
      />
      {/**Redirects */}
      <Redirect from={suffix + "/"} to={suffix + "/dashboard"} exact />
      {/**Roots */}
      <Route
        path={suffix + "/*"}
        render={(props) => (
          <ErrorPage
            code="404"
            label="Sayfa Bulunamadı"
            desc="Aradığınız Sayfaya Ulaşamıyoruz."
            {...props}
          />
        )}
        exact
      />
    </Switch>
  );
}
