//import { Route } from "react-router-dom";
import store from "../store/store";
import Create from "../pages/create";
import Leaderboard from "../pages/leaderboard";
import LogIn from "../pages/logIn";
import Home from "../pages/home";
//import Loading from "../components/loading/loading";
import Header from "../components/header";
import { handleInitialData } from "../actions/shared";
import { useEffect } from "react";
import { connect } from "react-redux";

function App({ authedUser }) {
  useEffect(() => {
    store.dispatch(handleInitialData());
  });
  return (
    <>
      {!authedUser ? (
        <div>
          <LogIn />
        </div>
      ) : (
        <div className="bg-zinc-900">
          <Header />
          <Home />
          <Create />
          <Leaderboard />
        </div>
      )}
    </>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
