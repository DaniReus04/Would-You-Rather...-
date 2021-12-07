import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../data/_DATA";

function useQuestionBox(props) {
  console.log("props:", props)
  return <div>é</div>;
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  const optionOneText = question ? [question.optionOne.text] : null;
  const optionTwoText = question ? [question.optionTwo.text] : null;
  const author = question ? [question.author] : null;

  return {
    question: question ? formatQuestion(
      question,
      optionOneText,
      optionTwoText,
      author,
    ) : null
  };
}

export default connect(mapStateToProps)(useQuestionBox);
