import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../data/api";

function useQuestionBox(props) {
  const question = props.question;

  const { name, avatarURL, textOne, textTwo } = question;
  return (
    <form>      
      <figure><img src={avatarURL} alt={name} /></figure>
      <div>
        <p>{name} asks you what do you rather? </p>
        <p><button onClick={(e) => e.preventDefault()}>{textOne}</button></p>
        <p><button onClick={(e) => e.preventDefault()}>{textTwo}</button></p>
      </div>
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
