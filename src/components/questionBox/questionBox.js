import React from "react";
import { connect } from "react-redux";

function useQuestionBox(props) {
  return <div>Questions</div>;
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  console.log(question)
  return {};
}

export default connect(mapStateToProps)(useQuestionBox);
