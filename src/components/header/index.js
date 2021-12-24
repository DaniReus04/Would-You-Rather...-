import React from "react";

function header() {
  return (
    <div className="flex justify-around">
      <div className="bg-neutral-100 rounded-xl h-8 w-1/2 px-6">
        <div className="flex justify-evenly py-1">
          <button className="font-semibold">Home</button>
          <button className="font-semibold">Create</button>
          <button className="font-semibold">Leaderboard</button>
          <button className="text-white shadow-md rounded-md shadow-slate-600 px-2 bg-neutral-600">LogOut</button>
        </div>
      </div>
    </div>
  );
}

export default header;
