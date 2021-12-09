import React from "react";
import { connect } from "react-redux";

function useQuestionBox(props) {
  const question = props.question;

  const { author, optionOne, optionTwo } = question;
  return (
    <form>
      <div>{author}</div>
      <button onClick={(e) => e.preventDefault()}>{optionOne.text}</button>
      <button onClick={(e) => e.preventDefault()}>{optionTwo.text}</button>
    </form>
  );
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];

  return {
    question: question,
  };
}

export default connect(mapStateToProps)(useQuestionBox);
