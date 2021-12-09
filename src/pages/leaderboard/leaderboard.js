import React from "react";
import { connect } from "react-redux";
import UserBoard from "../../components/userboard/userboard";

function leaderboard(props) {
  return (
  <ul>
    {props.userId.map(id => <li key={id}> <UserBoard id={id}/> </li>)}
  </ul>
  );
}

function mapStateToProps({ users }) {
  return{ 
    userId: Object.keys(users) 
  }
}
export default connect(mapStateToProps)(leaderboard);
