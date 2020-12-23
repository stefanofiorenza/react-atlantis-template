import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function User({ user }) {
  const admin = {
    name: user.name,
    surname: user.surname,
    role: "Yönetici",
  };
  return (
    <div className="user">
      <div className="avatar-sm float-left mr-2">
        <span className="avatar-title rounded bg-primary">
          <b> {admin.name.substring(0, 1) + admin.surname.substring(0, 1)}</b>
        </span>
      </div>

      <div className="info">
        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
          <span>
            {admin.name + " " + admin.surname}
            <span className="user-level">{admin.role}</span>
            <span className="caret"></span>
          </span>
        </a>
        <div className="clearfix"></div>

        <div className="collapse in" id="collapseExample">
          <ul className="nav">
            <li>
              <Link to="/panel/account">
                <span className="link-collapse">Profilim</span>
              </Link>
            </li>
            <li>
              <Link to="/panel/settings">
                <span className="link-collapse">Ayarlar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(User);
