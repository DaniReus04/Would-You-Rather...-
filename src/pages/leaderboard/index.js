import React from "react";
import { connect } from "react-redux";
import UserBoard from "../../components/userboard";

function leaderboard(props) {
  return (
    <div className="grid items-center justify-center py-16">
      <div className="bg-neutral-100 px-16 py-4 rounded-lg shadow-md shadow-white">
      <h2 className="font-bold text-lg">Leaderboard</h2>
      <ul className="py-4">
        {props.userId.map((id) => (
          <li key={id}>
            <UserBoard id={id} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    userId: Object.keys(users),
  };
}
export default connect(mapStateToProps)(leaderboard);
