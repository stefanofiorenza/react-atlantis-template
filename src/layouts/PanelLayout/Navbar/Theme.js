import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//Containers
import { changeTheme } from "../../../Containers/theme";

export default function Theme() {

  const modes = [
    {
      mode: "light",
      color: "blue",
      back: "#F9FBFE",
      left: "#fff",
      top: "#1269DB",
    },
    {
      mode: "dark",
      color: "blue",
      back: "#1B2135",
      left: "#1F283E",
      top: "#1269DB",
    },
    {
      mode: "light",
      color: "white",
      back: "#F9FBFE",
      left: "#fff",
      top: "#fff",
    },
    {
      mode: "dark",
      color: "dark",
      back: "#1B2135",
      left: "#1F283E",
      top: "#1B2135",
    },
  ];

  return (
    <div className="w-100 p-2">
      <div className="app-theme-switch w-100 text-center">
        <h6>GÖRÜNÜM</h6>
        <div className="app-theme-switch-modes">
          {modes.map((p, i) => (
            <div
              className="app-theme-switch-mode"
              key={i}
              onClick={() => changeTheme(p.mode, p.color)}
            >
              <div
                className="app-theme-switch-body"
                style={{ backgroundColor: p.back }}
              >
                <div
                  className="app-theme-switch-top"
                  style={{ backgroundColor: p.top }}
                ></div>
                <div
                  className="app-theme-switch-left"
                  style={{ backgroundColor: p.left }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
