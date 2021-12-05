import React from 'react';
import { connect } from "react-redux";

function Home(props) {
  return (
    <>
    <h2>Questions</h2>
    <ul>
      {props.questionsIds.map((id) => <li key={id}>Questions id: {id}</li>)}
    </ul>
    </>
 )
}

function mapStateToProps({questions}) {
  return {
    questionsIds: Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home);