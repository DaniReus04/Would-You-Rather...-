import React from 'react';
import { connect } from "react-redux";

function userboard(props) {
  return <div>{props.usersList.name}</div>;
}

function mapStateToProps({ users }, { id }){
  console.log("id:", id)
  const user = users[id]
  console.log("user:", user)
 return{
   usersList: user,
 }
}

export default connect(mapStateToProps)(userboard);