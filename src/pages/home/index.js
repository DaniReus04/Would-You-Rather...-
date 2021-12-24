import React from "react";
import { connect } from "react-redux";
import QuestionBox from "../../components/questionBox";

function Home(props) {
  return (
    <>
    <div className="grid items-start justify-center py-8">
    <div className="bg-neutral-100 px-12 py-4 rounded-xl shadow-md shadow-white">
      <h2 className="flex font-bold justify-center text-lg">Questions</h2>
      <ul>
        {props.questionsIds.map((id) => (
          <li key={id}>
            <QuestionBox id={id} />
          </li>
        ))}
      </ul>
      </div>
      </div>
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
