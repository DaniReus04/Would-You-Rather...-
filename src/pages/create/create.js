import React from "react";
import { connect } from "react-redux";

function create() {
  return (
    <div>
      <h2>Create session</h2>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {};
}

export default connect(mapStateToProps)(create);
