import { RECEIVE_LOGGED } from "../../actions/loggedUser";

export default function logged(state = null, action) {
  switch (action.type) {
    case RECEIVE_LOGGED:
      return action.id;
    default:
      return state;
  }
}
