import React from "react";
import { connect } from "react-redux";
import { formatLeaderboard } from "../../data/api";

function userboard(props) {
  const user = props.user;
  const { name, avatarURL, answer, questions } = user;
  return (
    <form className="flex divide-x-2 py-2">
      <figure>
        <img src={avatarURL} alt={name} className="w-28 px-4" />
      </figure>
      <div className="px-4">
      <p>Answers: {answer}</p>
      <p className="py-1">Questions: {questions}</p>
      <p className="font-semibold">Total: </p>
      </div>
    </form>
  );
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  console.log("user:", user)

  return {
    user: formatLeaderboard(user),
  };
}

export default connect(mapStateToProps)(userboard);
