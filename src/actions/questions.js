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

export function addAnswer(action) {
  return {
    type: RECEIVE_ANSWER,
    payload: action,
  };
}

export function newAnswer(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info).then(() => {
      dispatch(addAnswer(info));
    });
  };
}
