import { useState } from "react";
import { connect } from "react-redux";
import QuestionBox from "../../components/questionBox";

function Home(props) {
  const [questions, setQuestions] = useState(true);

  const showAnsweredQuestions = () => setQuestions(false);
  const showUnAnsweredQuestions = () => setQuestions(true);

  return (
    <>
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
          <h2 className="flex font-bold justify-center text-lg">Questions</h2>
          <ul className="divide-y-2" id="questions">
            {questions === false
              ? props.Answered.map((id) => (
                  <li key={id} className="py-6">
                    <QuestionBox id={id} />
                  </li>
                ))
              : props.noAnswer.map((id) => (
                  <li key={id} className="py-6">
                    <QuestionBox id={id} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  console.log("user:", user, "questions:", questions)

  const question = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    Answered: question,
    noAnswer: Object.keys(questions)
      .filter((question2) => question.indexOf(question2) < 0)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Home);
