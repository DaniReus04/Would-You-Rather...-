export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTIONS = "CREATE_QUESTIONS";

export function receiveQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function createQuestions(id, user) {
  return {
    type: CREATE_QUESTIONS,
    id,
    user,
  };
}
