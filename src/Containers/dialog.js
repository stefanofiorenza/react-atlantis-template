import React from "react";
import { connect } from "react-redux";
import { IoClose } from "react-icons/io5";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";

import { setDialog, removeDialog } from "../redux/actions";

const mapStateToProps = (state) => ({
  message: state.dialogReducer.message,
  onTrue: state.dialogReducer.onTrue,
});
export const DialogBox = connect(mapStateToProps)(function ({
  message,
  onTrue,
}) {
  if (message && message !== "")
    return (
      <>
        <div className="modal animated fade fadeIn show d-block">
          <div
            className="modal-backdrop animated fade show"
            onClick={() => removeDialog()}
            style={{
              zIndex: 1,
            }}
          ></div>
          <div className="modal-dialog modal-dialog-centered animated flipInX" style={{ zIndex: 2 }}>
            <div className="modal-content">
              <div className="modal-body">
                <button className="close" onClick={() => removeDialog()}>
                  <span aria-hidden="true">
                    <IoClose />
                  </span>
                </button>
                <p className="mt-4 mb-4 text-center">
                  <b>{message}</b>
                </p>
                <div className="w-100 d-flex">
                  <button
                    style={{ flex: 1 }}
                    className="btn  mr-3"
                    onClick={() => removeDialog()}
                  >
                    <RiCloseFill size={24} className="mr-1" />
                    Hayır
                  </button>
                  <button
                    style={{ flex: 1 }}
                    className="btn btn-primary"
                    onClick={() => {
                      onTrue();
                      removeDialog();
                    }}
                  >
                    <RiCheckFill size={24} className="mr-1" />
                    Evet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return null;
});

export function showDialog(message, onTure) {
  setDialog(message, onTure);
}
