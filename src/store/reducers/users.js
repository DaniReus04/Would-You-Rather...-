import { RECEIVE_USER } from "../../actions/users";
import { RECEIVE_ANSWER, CREATE_QUESTION } from "../../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        ...action.user,
      };
      case CREATE_QUESTION:
        console.log("action:", action)
        return{
          ...state,
          [action.question.author]:{
            ...state[action.question.author],
            questions: [
              ...state[action.question.author].questions,
              action.question.id
            ]
          }
        }
    case RECEIVE_ANSWER:
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default:
      return state;
  }
}
