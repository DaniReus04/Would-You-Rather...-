import React from "react";
import { connect } from "react-redux";
import QuestionBox from "../../components/questionBox/questionBox";

function Home(props) {
  return (
    <>
      <h2>Questions</h2>
      <ul>
        {props.questionsIds.map((item) => (
          <li key={item.id}>
            <QuestionBox
              id={item.id}
              optionOne={item.optionOne}
              optionTwo={item.optionTwo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Home);
