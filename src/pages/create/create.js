import React from "react";
import { connect } from "react-redux";

function create() {
  return (
    <div>
      <h2>Create question</h2>
      <h3>Let's create a question</h3>
      <div>
        <p>Would you rather?</p>  
        <p><input type="text" value="text" placeholder="Option One"></input></p>
        <p>Or</p>
        <p><input type="text" value="text" placeholder="Option Two"></input></p>
      </div>
    </div>
  );
}

function mapStateToProps({ logged, questions }) {
  return {};
}

export default connect(mapStateToProps)(create);
