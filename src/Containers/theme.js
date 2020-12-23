import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//Actions
import { setTheme } from "../redux/actions";

const color_schemes = {
  light: {
    white: {
      body: "bg3",
      logo: "white",
      navbar: "white",
      sidebar: "white",
    },
    blue: {
      body: "bg1",
      logo: "blue",
      navbar: "blue2",
      sidebar: "white",
    },
  },
  dark: {
    blue: {
      body: "dark",
      logo: "blue",
      navbar: "blue2",
      sidebar: "dark2",
    },
    dark: {
      body: "dark",
      logo: "dark2",
      navbar: "dark",
      sidebar: "dark2",
    },
  },
};

export function ThemeArea({ children }) {
  const theme = useSelector((state) => state.themeReducer.theme);
  //Renderer Theme
  useEffect(() => {
    const body = document.body;
    body.setAttribute(
      "data-background-color",
      color_schemes[theme.mode][theme.color].body
    );
  }, [theme]);
  //Renderer Status
  useEffect(() => {
    let localTheme = localStorage.getItem("localTheme");
    if (localTheme) {
      let theme = JSON.parse(localTheme);
      changeTheme(theme.mode, theme.color);
    } else {
      const hasDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (hasDark) {
        changeTheme("dark", "dark");
      } else {
        changeTheme("light", "blue");
      }
    }
  }, []);

  return <>{children}</>;
}

export function GetThemeColor() {
  const theme = useSelector((state) => state.themeReducer.theme);
  if (theme && color_schemes[theme?.mode] && color_schemes[theme.mode])
    return color_schemes[theme?.mode][theme?.color];
  else return color_schemes.light.blue;
}

export function changeTheme(mode, color) {
  setTheme(mode, color);
  localStorage.setItem("localTheme", JSON.stringify({ mode, color }));
}
