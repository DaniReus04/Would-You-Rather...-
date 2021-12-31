import React from "react";
import { useSelector } from "react-redux";
import UserBoard from "../../components/userboard";
import Header from "../../components/header";

function useLeaderboard() {
  const users = useSelector((state) => state.users)

  const userId = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );

  return (
    <>
    <Header/>
    <div className="grid items-center justify-center py-16">
      <div className="bg-neutral-100 px-12 py-4 rounded-lg shadow-md shadow-white">
        <h2 className="flex justify-center font-bold text-lg">Leaderboard</h2>
        <ul className="py-2 divide-y-2">
          {userId.map((id) => (
            <li key={id}>
              <UserBoard id={id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default useLeaderboard;
