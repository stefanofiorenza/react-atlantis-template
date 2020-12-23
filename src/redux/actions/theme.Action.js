import store from "../store";

/**/
var SET_THEME = "SET_THEME";
/**/
export function setTheme(mode, color) {
  store.dispatch({
    type: SET_THEME,
    theme: {
      mode: mode,
      color: color,
    },
  });
}
