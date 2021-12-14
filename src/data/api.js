import { _getQuestions, _getUsers } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function formatQuestion(question, author) {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    id,
    name,
    avatarURL,
    textOne: optionOne.text,
    textTwo: optionTwo.text,
  };
}

export function formatLeaderboard(user){
  const {answers, questions, id, name, avatarURL } = user

  return{
    id,
    name,
    avatarURL,
    answer: answers.length,
    questions: questions.length, 
  }
}
