import React, { useState, useEffect } from "react";
//Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Article from "./Article";
import Footer from "./Footer";
//Helpers
import { post } from "../../helpers/http.helper";
//Utilities
import { getUserStroge, setUserStroge } from "../../utilities/userStroge";
//Actions
import { hideLoading, showLoading } from "../../redux/actions";
//Containers
import { toastify } from "../../Containers/toastify";
//Routes
import Routes from "./routes";

function PanelLayout({ history, location }) {
  //Status
  const [minimaze, setMinimaze] = useState(false);
  const [minimazeHover, setMinimazeHover] = useState(false);
  const [topbar, setTopbar] = useState(false);
  //Verify
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    /** 
     * 
     * Verify İşlemi Api Bağlandığında Kulanlacak.
     * 
     *
    showLoading();
    let token = getUserStroge().token;
    if (token) {
      post("api/admin/verify", {}, { "x-access-token": token }).then((res) => {
        if (res.result) {
          setUserStroge(res.token, res.admin);
          setVerify(true);
        } else {
          history.push("/auth/login");
          toastify.error(res.message);
        }
        hideLoading();
      });
    } else {
      history.push("/auth/login");
      hideLoading();
    }
    */
    /**
     * <--Geçici Giriş
     */
    setVerify(true);
    hideLoading();
    setUserStroge("token", {
      name: "Admin",
      surname: "Admin",
      email: "admin@admin.com",
    });
  }, [location.pathname]);

  if (verify) {
  

    let wrapperClass = "wrapper";
    /**Minimaze */
    if (minimaze) {
      wrapperClass += " sidebar_minimize nav_open";
    }
    /**Hover Minimaze */
    if (minimazeHover) {
      wrapperClass += " sidebar_minimize_hover";
    }
    /**TopBar */
    if (topbar) {
      wrapperClass += " topbar_open";
    }

    return (
      <div className={wrapperClass}>
        <Navbar
          onMinimaze={() => setMinimaze(!minimaze)}
          onTopbar={() => setTopbar(!topbar)}
        />
        <Sidebar onMinimazeHover={(hover) => setMinimazeHover(hover)} />
        <div className="main-panel app-panel">
          <Article>
            <Routes />
          </Article>
          <Footer />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default PanelLayout;
