import React from "react";
import { connect } from "react-redux";

function avatar(props) {
  const user = props.users;
  const { avatarURL } = user;
  
  return (
      <div>{ avatarURL }</div>
  );
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  
  return {
    users: user,
  };
}

export default connect(mapStateToProps)(avatar);
