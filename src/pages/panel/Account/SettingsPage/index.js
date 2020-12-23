import { post } from "../../../../helpers/http.helper";
import React, { useState } from "react";

import { withRouter } from "react-router";
import { Content } from "../../../../components";
import { showDialog } from "../../../../Containers/dialog";
import { toastify } from "../../../../Containers/toastify";
import { hideLoading, showLoading } from "../../../../redux/actions";
import { getUserStroge } from "../../../../utilities/userStroge";

function Page({ Header, history }) {
  const [change, setChange] = useState(false);
  const [pass, setPass] = useState({
    current_password: "",
    new_password: "",
    new_re_password: "",
  });

  function updatePassword() {
    showLoading();
    post(
      "api/admin/change_password",
      { ...pass },
      {
        "x-access-token": getUserStroge().token,
      }
    ).then((res) => {
      if (res.result) {
        toastify.success(res.message);
        history.push("/");
      } else {
        toastify.error(res.message);
        setPass({
          current_password: "",
          new_password: "",
          new_re_password: "",
        });
      }
      hideLoading();
    });
  }

  return (
    <div className="page-inner">
      <Header.Breadcrumb breadcrumb={[]} head="Ayarlar" />
      <Content>
        <div className="row align-self-stretch">
          <div className="col-md-8 offset-md-2" style={{ height: "100%" }}>
            <div className="card">
              <div className="card-header">
                <div className="h3">Şiremi Değiştir</div>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group form-group-default">
                        <label>Mevcut Şifre</label>
                        <input
                          type="password"
                          className="form-control"
                          value={pass.current_password}
                          onChange={(e) => {
                            setPass({
                              ...pass,
                              ...{ current_password: e.target.value },
                            });
                            setChange(true);
                          }}
                        />
                      </div>
                    </div>
                    {pass.new_password.length > 8 ? null : (
                      <div className="col-md-12">
                        <div className="alert alert-warning">
                          Şifreniz 8 Karakteden Uzun Olmalıdır.
                        </div>
                      </div>
                    )}

                    <div className="col-md-12">
                      <div className="form-group form-group-default">
                        <label>Yeni Şifre</label>
                        <input
                          type="password"
                          className="form-control"
                          value={pass.new_password}
                          onChange={(e) => {
                            setPass({
                              ...pass,
                              ...{ new_password: e.target.value },
                            });
                            setChange(true);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group form-group-default">
                        <label>Yeni Şifre Tekrar</label>
                        <input
                          type="password"
                          className="form-control"
                          value={pass.new_re_password}
                          onChange={(e) => {
                            setPass({
                              ...pass,
                              ...{ new_re_password: e.target.value },
                            });
                            setChange(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-3 mb-3">
                    <button
                      className="btn btn-primary"
                      disabled={
                        change
                          ? pass.new_password.length > 8
                            ? false
                            : true
                          : true
                      }
                      onClick={() => {
                        showDialog(
                          "Şifrenizi Değiştirmek İstediğinize Eminmisisniz?",
                          () => updatePassword()
                        );
                      }}
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
export default withRouter(Page);
