import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionBox from "../../components/questionBox";
import Header from "../../components/header";

function Home() {
  const [questions, setQuestions] = useState(true);
  const stateQuestions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  const user = users[authedUser];
  const question = Object.keys(user.answers).sort(
    (a, b) => stateQuestions[b].timestamp - stateQuestions[a].timestamp
  ); 

  const answered = question;
  const noAnswer = Object.keys(stateQuestions)
  .filter((question2) => question.indexOf(question2) < 0)
  .sort((a, b) => stateQuestions[b].timestamp - stateQuestions[a].timestamp);

  const showAnsweredQuestions = () => setQuestions(false);
  const showUnAnsweredQuestions = () => setQuestions(true);

  return (
    <>
    <Header/>
      <div className="flex justify-around py-3">
        <div className="bg-neutral-100 rounded-xl h-8 w-72 px-6 shadow-sm shadow-white">
          <div className="flex items-center py-1">
            <div className="px-2">
              <button
                onClick={showUnAnsweredQuestions}
                className="text-white shadow-sm rounded-md shadow-slate-600 px-2 bg-neutral-600"
              >
                Unanswered
              </button>
            </div>
            <div className="px-8">
              <button
                onClick={showAnsweredQuestions}
                className="text-white shadow-sm rounded-md shadow-slate-600 px-2 bg-neutral-600"
              >
                Answered
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid items-start justify-center py-4">
        <div className="bg-neutral-100 px-12 py-4 rounded-xl shadow-md shadow-white">
          <h2 className="flex justify-center font-semibold text-xl">Questions</h2>
          <ul className="divide-y-2 py-2" id="questions">
            {questions === false
              ? answered.map((id) => (
                  <li key={id}>
                    <QuestionBox qid={id} />
                  </li>
                ))
              : noAnswer.map((id) => (
                  <li key={id}>
                    <QuestionBox qid={id} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
