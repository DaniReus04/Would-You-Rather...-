import { useSelector } from "react-redux";
import { formatQuestion } from "../../data/api";
import { useParams } from "react-router-dom";

function useQuestionPage() {
  const { id } = useParams();

  const question = useSelector(state => state.questions)
  const users = useSelector(state => state.users)

  const questionId = question[id];
  const questionDetails = formatQuestion(questionId, users[questionId.author]);

  const { avatarURL, name, textOne, textTwo } = questionDetails;
   

  return (
    <div className="grid items-start justify-center py-40">
      <div className="bg-neutral-100 px-4 py-4 rounded-xl shadow-md shadow-white">
      <>
    <div>
      <form className="flex divide-x-2 rounded-sm border-neutral-200">
        <figure className="px-4">
          <img src={avatarURL} alt={name} className="w-28 px-2" />
        </figure>
        <div className="px-4">
          <h2 className="font-bold">
            {name} asks you what do you rather?
          </h2>
          <div className="py-1">
            <p className="flex justify-center">
              <button
                onClick={(e) => e.preventDefault()}
                className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600"
              >
                {textOne}
              </button>
            </p>
            <p className="flex justify-center">Or</p>
            <p className="flex justify-center">
              <button
                onClick={(e) => e.preventDefault()}
                className="text-white shadow-md rounded-md shadow-slate-600 min-w-full bg-neutral-600"
              >
                {textTwo}
              </button>
            </p>
          </div>
        </div>
      </form>
      </div>
    </>
      </div>
    </div>
  );
}

export default useQuestionPage;
