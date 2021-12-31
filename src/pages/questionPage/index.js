import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatQuestion } from "../../data/api";
import { useParams } from "react-router-dom";
import { newAnswer } from "../../actions/questions";
import Loading from "../../components/loading";
import PageNotFound from "../404";
import Header from "../../components/header";

function useQuestionPage() {
  const { id } = useParams();
  const question = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const [target, setTarget] = useState("");
  const [loader, setLoader] = useState(false);

  /*Hooks above */

  if (question[id] === undefined) {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }
  const questionId = question[id];
  const qid = questionId.id;
  //const answer = user.answers[question.id]
  const questionDetails = formatQuestion(questionId, users[questionId.author]);
  const { avatarURL, name, textOne, textTwo } = questionDetails;

  const option = (e) => {
    setTarget(e.target.value);
  };

  const onAnswer = (e) => {
    e.preventDefault();
    const answer = target;

    setLoader(true);
    dispatch(newAnswer({ authedUser, qid, answer }));
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };

  console.log("qid:", qid, "questionId:", questionId, "id:", id);

  return (
    <>
    <Header />
    <div className="grid items-start justify-center py-40">
      <div className="bg-neutral-100 px-4 py-4 rounded-xl shadow-md shadow-white">
        <>
          <div>
            <form
              className="flex divide-x-2 rounded-sm border-neutral-200"
              onSubmit={onAnswer}
            >
              <figure className="px-4">
                <img src={avatarURL} alt={name} className="w-28 px-2" />
              </figure>
              <div className="px-4">
                {loader ? (
                  <Loading />
                ) : (
                  <>
                    <h2 className="font-bold">
                      {name} asks you what do you rather?
                    </h2>
                    <div className="py-1">
                      <p className="flex justify-center">
                        <button
                          onClick={option}
                          className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600"
                          value="optionOne"
                          name="answer"
                        >
                          {textOne}
                        </button>
                      </p>
                      <p className="flex justify-center">Or</p>
                      <p className="flex justify-center">
                        <button
                          onClick={option}
                          className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600"
                          value="optionTwo"
                          name="answer"
                        >
                          {textTwo}
                        </button>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </>
      </div>
    </div>
    </>
  );
}

export default useQuestionPage;
