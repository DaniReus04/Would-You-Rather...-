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

export function addAnswer(authedUser, questionId, answer) {
  return {
    type: RECEIVE_ANSWER,
    authedUser,
    questionId,
    answer,
  };
}

export function newAnswer(authedUser, questionId, answered) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, questionId, answered).then(
      (answer) => {
        dispatch(addAnswer(authedUser, questionId, answered));
      }
    );
  };
}
