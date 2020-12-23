var initial_state = {
  theme: {
    mode: "light",
    color: "blue",
  },
};

export default function themeReducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { theme: action.theme };
    default:
      return state;
  }
}
