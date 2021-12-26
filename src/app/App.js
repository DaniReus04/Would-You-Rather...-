import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../store/store";
import Create from "../pages/create";
import Leaderboard from "../pages/leaderboard";
import LogIn from "../pages/logIn";
import Home from "../pages/home";
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
        <Router>
          <Fragment>
          <div className="min-h-screen bg-zinc-900">
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>  
          </Fragment>
        </Router>
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
