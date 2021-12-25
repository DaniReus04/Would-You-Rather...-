import React from "react";
import { connect } from "react-redux";

function create() {
  return (
    <div className="grid items-center justify-center py-28">
      <div className="bg-neutral-100 px-12 py-4 rounded-lg shadow-md shadow-white h-64">
        <h2 className="flex justify-center font-bold text-lg">
        Let's create a question
        </h2>
        <div className="py-4">
          <p className="flex justify-center">Would you rather?</p>
          <p className="py-2">
            <input
              type="text"
              placeholder="Option One"
              className="px-4 text-center font-semibold rounded-lg shadow-sm shadow-black caret-slate-600"
            ></input>
          </p>
          <p className="flex justify-center">Or</p>
          <p className="py-2">
            <input
              type="text"
              placeholder="Option Two"
              className="px-4 text-center font-semibold rounded-lg shadow-sm shadow-black"
            ></input>
          </p>
          <div className="flex justify-center py-2">
          <button className="text-white shadow-md rounded-md shadow-slate-600 px-6 bg-neutral-600 py-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ logged, questions, }) {
  return {};
}

export default connect(mapStateToProps)(create);
