import React from "react";
import { useSelector } from "react-redux";
import { formatLeaderboard } from "../../data/api";

function useUserboard({id}) {
  const users = useSelector((state) => state.users);
  
  const userId = users[id];
  const user = formatLeaderboard(userId);
  const { name, avatarURL, answer, questions } = user;
  const overall = [answer+questions];
  return (
    <>
    <form className="flex divide-x-2 py-1">
      <figure className="py-3">
        <img src={avatarURL} alt={name} className="w-28 px-4" />
        <p className="flex justify-center py-1 font-semibold">{name}</p>
      </figure>
      <div className="px-4 py-4">
      <p>Answers: {answer}</p>
      <p className="py-1">Questions: {questions}</p>
      <p className="font-semibold py-5">Overall: {overall}</p>
      </div>
    </form>
    </>
  );  
}

export default useUserboard;
