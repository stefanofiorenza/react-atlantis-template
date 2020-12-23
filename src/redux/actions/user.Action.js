import store from "../store";

/**/
var SET_USER = "SET_USER";
var REMOVE_USER = "REMOVE_USER";
/**/
export function setUser(name, surname, email) {
  store.dispatch({
    type: SET_USER,
    user: {
      name: name,
      surname: surname,
      email: email,
    },
  });
}
export function removeUser() {
  store.dispatch({
    type: REMOVE_USER,
  });
}
