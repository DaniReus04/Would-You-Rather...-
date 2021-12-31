import { RECEIVE_QUESTIONS } from "../../actions/questions";
import { CREATE_QUESTION } from "../../actions/questions";
import { RECEIVE_ANSWER } from "../../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case RECEIVE_ANSWER:
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: [
              ...state[action.payload.qid][action.payload.answer].votes.concat([
                action.payload.authedUser,
              ]),
            ],
          },
        },
      };
    default:
      return state;
  }
}
