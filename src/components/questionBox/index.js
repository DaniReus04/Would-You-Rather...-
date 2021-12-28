import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../data/api";
import { Link } from "react-router-dom";

function useQuestionBox(props) {
  const question = props.question;

  const { name, avatarURL, textOne, id } = question;

  return (
    <div
      className="flex divide-x-2 rounded-sm border-neutral-200"
    >
      <figure className="py-7">
        <img src={avatarURL} alt={name} className="w-28 px-2" />
      </figure>
      <div className="px-4">
        <p className="flex justify-center font-semibold">{name} asks you what do you rather? </p>
        <div className="py-2">
          <p className="flex justify-center">
            <button
              disabled
              className="font-semibold shadow-md rounded-md shadow-slate-600 w-80 bg-neutral-300"
            >
              {textOne}
            </button>
          </p>
          <p className="flex justify-center py-2">Or</p>
          <p className="flex justify-center">
            <Link to={`${id}`} className="text-white shadow-md rounded-md shadow-slate-600 px-4 py-1 bg-neutral-600">
              Show more
            </Link >
          </p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: formatQuestion(question, users[question.author]),
  };
}

export default connect(mapStateToProps)(useQuestionBox);
