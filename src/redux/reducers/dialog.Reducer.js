var initial_state = {
  message: "",
  onTrue: () => {},
};

export default function dialogReducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_DIALOG":
      return { message: action.message, onTrue: action.onTrue };
    case "REMOVE_DIALOG":
      return initial_state;
    default:
      return state;
  }
}
