import React from "react";
import { useSelector } from "react-redux";
import { formatQuestion } from "../../data/api";
import { Link } from "react-router-dom";

function useQuestionBox({qid}) {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  const questionId = questions[qid];
  const question = formatQuestion(questionId, users[questionId.author]);

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
            <Link to={`/questions/${id}`} className="text-white shadow-md rounded-md shadow-slate-600 px-4 py-1 bg-neutral-600">
              Show more
            </Link >
          </p>
        </div>
      </div>
    </div>
  );
}

export default useQuestionBox;
