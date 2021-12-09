import React from "react";
import { connect } from "react-redux";

function leaderboard(props) {
  return <div>{props.users.id}</div>;
}

function mapStateToProps({ users }) {
  return{ users }
}
export default connect(mapStateToProps)(leaderboard);
