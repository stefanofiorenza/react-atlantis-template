import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//İcons
import { MdInvertColors } from "react-icons/md";
//Utilities
import { removeUserStroge } from "../../../utilities/userStroge";
//Containers
import { GetThemeColor } from "../../../Containers/theme";
//components
import Logo from "./Logo";
import Item from "./Item";
import Theme from "./Theme";

function Navbar({ user, onMinimaze, onTopbar }) {
  const admin = {
    name: user.name,
    surname: user.surname,
    email: user.email,
  };

  return (
    <div className="main-header">
      <Logo brand="Pro3digy" onMinimaze={onMinimaze} onTopbar={onTopbar} />

      <nav
        id="navbar"
        className="navbar navbar-header navbar-expand-lg"
        data-background-color={GetThemeColor().navbar}
      >
        <div className="container-fluid">
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <Item icon={MdInvertColors}>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <Theme />
              </ul>
            </Item>

            <Item
              title={() => (
                <div className="avatar-sm">
                  <span className="avatar-title rounded bg-white text-primary">
                    <b>
                      {admin.name.substring(0, 1) +
                        "" +
                        admin.surname.substring(0, 1)}
                    </b>
                  </span>
                </div>
              )}
            >
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <span className="avatar-title rounded bg-primary">
                          <b>
                            {admin.name.substring(0, 1) +
                              admin.surname.substring(0, 1)}
                          </b>
                        </span>
                      </div>
                      <div className="u-text">
                        <h4>{admin.name + " " + admin.surname}</h4>
                        <p className="text-muted">{admin.email}</p>
                        <Link
                          to="/panel/account"
                          className="btn btn-primary btn-xs"
                        >
                          Profili Görüntüle
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/panel/account">
                      Profilim
                    </Link>

                    <Link className="dropdown-item" to="/panel/settings">
                      Ayarlar
                    </Link>

                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item text-danger"
                      to="/auth/login"
                      onClick={() => {
                        removeUserStroge();
                      }}
                    >
                      Çıkış Yap
                    </Link>
                  </li>
                </div>
              </ul>
            </Item>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(Navbar);
