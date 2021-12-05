import React from "react";
import { connect } from "react-redux";

function useQuestionBox(props) {
  return (
    <div>
      <ul>
        
      </ul>
    </div>
  );
}

function mapStateToProps({ questions }) {
  return {
  };
}

export default connect(mapStateToProps)(useQuestionBox);
