import React from "react";
import { connect } from "react-redux";
import UserBoard from "../../components/userboard/userboard";

function leaderboard(props) {
  return (
    <div>
      <h2>Leaderboard Session</h2>
      <ul>
        {props.userId.map((id) => (
          <li key={id}>
            <UserBoard id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    userId: Object.keys(users),
  };
}
export default connect(mapStateToProps)(leaderboard);
