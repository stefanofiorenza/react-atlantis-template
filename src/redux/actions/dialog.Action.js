import store from "../store";

/**/
var SET_DIALOG = "SET_DIALOG";
var REMOVE_DIALOG = "REMOVE_DIALOG";
/**/
export function setDialog(message, onTrue) {
  store.dispatch({
    type: SET_DIALOG,
    message: message,
    onTrue: typeof onTrue == "function" ? onTrue : () => {},
  });
}

export function removeDialog() {
  store.dispatch({
    type: REMOVE_DIALOG,
  });
}
