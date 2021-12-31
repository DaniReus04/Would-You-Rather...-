import { useState } from "react";
import { connect } from "react-redux";
import { newQuestion } from "../../actions/questions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/header";

function useCreate(props) {
  const [create, setCreate] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const author = props.authedUser;
    const optionOneText = e.target["optionOne"]["value"];
    const optionTwoText = e.target["optionTwo"]["value"];

    dispatch(newQuestion({ author, optionOneText, optionTwoText }));
    setCreate(true);
  };

  if (create === true) {
    return (
      <>
        <Navigate to="/"/>
      </>
    );
  }
  return (
    <>
    <Header/>
    <div className="grid items-center justify-center py-28">
      <div className="bg-neutral-100 px-12 py-4 rounded-lg shadow-md shadow-white h-64">
        <h2 className="flex justify-center font-bold text-lg">
          Let's create a question
        </h2>
        <form className="py-4" onSubmit={onSubmit}>
          <p className="flex justify-center">Would you rather?</p>
          <p className="py-2">
            <input
              type="text"
              placeholder="Option One"
              name="optionOne"
              className="px-4 text-center font-semibold rounded-lg shadow-sm shadow-black caret-slate-600"
            ></input>
          </p>
          <p className="flex justify-center">Or</p>
          <p className="py-2">
            <input
              type="text"
              placeholder="Option Two"
              name="optionTwo"
              className="px-4 text-center font-semibold rounded-lg shadow-sm shadow-black"
            ></input>
          </p>
          <div className="flex justify-center py-2">
            <button
              type="submit"
              className="text-white shadow-md rounded-md shadow-slate-600 px-6 bg-neutral-600 py-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(useCreate);
