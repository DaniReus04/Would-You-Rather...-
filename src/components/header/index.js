import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="flex justify-around py-1">
      <div className="bg-neutral-100 rounded-xl h-8 w-1/2 px-6  shadow-sm shadow-white">
        <div className="flex justify-evenly py-1">
          <Link to="/">
            <button className="font-semibold">Home</button>
          </Link>
          <Link to="/create">
            <button className="font-semibold">Create</button>
          </Link>
          <Link to="/leaderboard">
            <button className="font-semibold">Leaderboard</button>
          </Link>
          <button className="text-white shadow-md rounded-md shadow-slate-600 px-2 bg-neutral-600">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default header;
