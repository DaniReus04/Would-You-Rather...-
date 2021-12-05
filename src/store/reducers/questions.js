import { RECEIVE_QUESTIONS } from "../../actions/questions";
import { CREATE_QUESTIONS } from "../../actions/questions";
import users from "./users";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_QUESTIONS:
      return{
        ...state,
        [action.id]: {
          ...state[action.id],
          newQuestion: questions,
          user: users
        }
      }
    default:
      return state;
  }
}
