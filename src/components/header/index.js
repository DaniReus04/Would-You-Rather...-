import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthed } from "../../actions/authedUser";

function useHeader() {
  const dispatch = useDispatch()

  const onClick = (e) => {
    dispatch(setAuthed(e.target.value))
  }
  return (
    <div className="flex justify-around py-1">
      <div className="bg-neutral-100 rounded-xl h-8 w-1/2 px-6  shadow-sm shadow-white">
        <div className="flex justify-evenly py-1">
          <Link to="/">
            <button className="font-semibold">Home</button>
          </Link>
          <Link to="/add">
            <button className="font-semibold">Create</button>
          </Link>
          <Link to="/leaderboard">
            <button className="font-semibold">Leaderboard</button>
          </Link>
          <Link to="/">
          <button onClick={onClick} value={null} className="text-white shadow-md rounded-md shadow-slate-600 px-2 bg-neutral-600">
            LogOut
          </button>
          </Link>
        </div>
      </div>
    </div>
    /* Fazer um segundo header identico, mostrando o usuario logado (nome e foto) */
  );
}

export default useHeader;
