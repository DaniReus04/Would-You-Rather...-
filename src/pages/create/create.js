import React from "react";
import { connect } from "react-redux";

function create() {
  return <div>Create session</div>;
}

function mapStateToProps({ users }){
 return{}
}

export default connect(mapStateToProps)(create);
