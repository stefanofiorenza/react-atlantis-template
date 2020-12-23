import { setUser, removeUser } from "../redux/actions";

export function setUserStroge(token, user) {
  localStorage.setItem("userToken", token);
  setUser(user.name, user.surname, user.email);
}

export function getUserStroge() {
  var userToken = localStorage.getItem("userToken");
  if (userToken) {
    return {
      status: true,
      token: userToken,
    };
  } else {
    return {
      status: false,
    };
  }
}

export function removeUserStroge() {
  localStorage.removeItem("userToken");
  removeUser();
}
