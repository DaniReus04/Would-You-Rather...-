import { SET_LOGGED } from "../../actions/loggedUser";

export default function logged(state = null, action) {
  switch (action.type) {
    case SET_LOGGED:
      return action.id;
    default:
      return state;
  }
}
