import React from "react";
import { connect } from "react-redux";
import { formatLeaderboard } from "../../data/api";

function userboard(props) {
  const user = props.user;
  const { name, avatarURL, answer, questions } = user;
  return (
    <div>
      <figure>
        <img src={avatarURL} alt={name} style={{ width: "30px" }} />
      </figure>
      <p>Answers: {answer}</p>
      <p>Questions: {questions}</p>
      <p>Total: </p>
    </div>
  );
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];

  return {
    user: formatLeaderboard(user),
  };
}

export default connect(mapStateToProps)(userboard);
