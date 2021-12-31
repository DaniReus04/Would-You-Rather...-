import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../store/store";
import Create from "../pages/create";
import Leaderboard from "../pages/leaderboard";
import LogIn from "../pages/logIn";
import Home from "../pages/home";
import Question from "../pages/questionPage";
import PageNotFound from "../pages/404";
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
          <LogIn />
      ) : (
        <Router>
          <Fragment>
            <div className="min-h-screen bg-zinc-900">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/add" element={<Create />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/questions/:id" element={<Question />} />
                <Route path="*" element={<PageNotFound />} />
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
