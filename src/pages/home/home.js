import React from "react";
import { connect } from "react-redux";
import QuestionBox from "../../components/questionBox/questionBox";
import Avatar from "../../components/avatar/avatar";

function Home(props) {
  return (
    <>
      <h2>Questions</h2>
      <ul>
        {props.usersIds.map((id) => (
          <li key={id}>
            <Avatar id={id} />
          </li>
        ))}
        {props.questionsIds.map((id) => (
          <li key={id}>
            <QuestionBox id={id} />
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ questions, users }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    usersIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Home);
