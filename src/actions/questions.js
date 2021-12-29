import { saveQuestion, saveQuestionAnswer } from "../data/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";

export function receiveQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function newQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question).then((question) =>
      dispatch(addQuestion(question))
    );
  };
}

export function addAnswer(authedUser, qid, answer) {
  return {
    type: RECEIVE_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function newAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, qid, answer).then(
      (answer) => {
        dispatch(addAnswer(authedUser, qid, answer));
      }
    );
  };
}
