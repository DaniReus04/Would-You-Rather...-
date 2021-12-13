import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../data/api";

function useQuestionBox(props) {
  const question = props.question;

  const { name, avatarURL, textOne, textTwo } = question;
  return (
    <form>
      <div>{name}</div>
      <img src={avatarURL} alt={name} />
      <button onClick={(e) => e.preventDefault()}>{textOne}</button>
      <button onClick={(e) => e.preventDefault()}>{textTwo}</button>
    </form>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: formatQuestion(question, users[question.author]),
  };
}

export default connect(mapStateToProps)(useQuestionBox);
