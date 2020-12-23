import React from "react";
import {
  BiErrorAlt,
  BiError,
  BiCheckDouble,
  BiShieldQuarter,
  BiErrorCircle,
  BiChip,
} from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";

export function Toastify() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

function ToastContent(props) {
  const { message } = props;
  return (
    <div className="d-flex align-items-center">
      <props.icon size={26} className="mr-2" />
      <div>{message}</div>
    </div>
  );
}

function primary(message) {
  toast.info(<ToastContent icon={BiShieldQuarter} message={message} />, {
    className: "app-toast-alert bg-primary",
    bodyClassName: "app-toast-alert-body",
  });
}
function success(message) {
  toast.success(<ToastContent icon={BiCheckDouble} message={message} />, {
    className: "app-toast-alert bg-success",
    bodyClassName: "app-toast-alert-body",
  });
}
function secondary(message) {
  toast.info(<ToastContent icon={BiChip} message={message} />, {
    className: "app-toast-alert bg-secondary",
    bodyClassName: "app-toast-alert-body",
  });
}

function info(message) {
  toast.info(<ToastContent icon={BiErrorCircle} message={message} />, {
    className: "app-toast-alert bg-info",
    bodyClassName: "app-toast-alert-body",
  });
}

function warning(message) {
  toast.warning(<ToastContent icon={BiErrorAlt} message={message} />, {
    className: "app-toast-alert bg-warning",
    bodyClassName: "app-toast-alert-body",
  });
}
function error(message) {
  toast.error(<ToastContent icon={BiError} message={message} />, {
    className: "app-toast-alert bg-danger",
    bodyClassName: "app-toast-alert-body",
  });
}

export const toastify = {
  primary,
  success,
  secondary,
  info,
  warning,
  error,
  danger: error,
};
