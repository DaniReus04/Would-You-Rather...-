import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../data/api";

function useQuestionBox(props) {
  const question = props.question;

  const { name, avatarURL, textOne, textTwo } = question;
  return (
    <form className="flex divide-x-2 rounded-sm border-neutral-200">
      <figure>
        <img src={avatarURL} alt={name} className="w-28 px-2" />
      </figure>
      <div className="px-4">
        <p className="font-semibold">{name} asks you what do you rather? </p>
        <div className="py-1">
        <p className="flex justify-center">
          <button onClick={(e) => e.preventDefault()} className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600">{textOne}</button>
        </p>
        <p className="flex justify-center">Or</p>
        <p className="flex justify-center">
          <button onClick={(e) => e.preventDefault()} className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600">{textTwo}</button>
        </p>
        </div>
      </div>
    </form>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: formatQuestion(question, users[question.author]),
  };
}

export default connect(mapStateToProps)(useQuestionBox);
