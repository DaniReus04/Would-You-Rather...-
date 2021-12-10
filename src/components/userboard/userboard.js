import React from "react";
import { connect } from "react-redux";

function userboard(props) {
  const users = props.usersList;
  const { answers } = users;
  const count = Object.keys(answers).length;

  return (
    <div>
      {props.usersList.name}: {count}
    </div>
  );
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];

  return {
    usersList: user,
  };
}

export default connect(mapStateToProps)(userboard);
