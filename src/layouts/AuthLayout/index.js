import React, { useEffect } from "react";
import Routes from "./routes";
import { removeUserStroge } from "../../utilities/userStroge";

function AuthLayout() {
  function onLogout() {
    removeUserStroge();
  }

  useEffect(() => {
    onLogout();
    //body
    document.body.setAttribute("data-background-color", "bg2");
  }, []);

  return (
    <div className="w-100">
      <Routes />
    </div>
  );
}
export default AuthLayout;
