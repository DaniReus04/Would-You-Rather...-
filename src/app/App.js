import store from "../store/store";
import Create from "../pages/create/create";
import Leaderboard from "../pages/leaderboard/leaderboard";
import Profile from "../pages/profile/profile";
import Home from "../pages/home/home";
//import Loading from "../components/loading/loading";
import { handleInitialData } from "../actions/shared";
import { useEffect } from "react";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    store.dispatch(handleInitialData());
  });
  return (
    <>
      {props.logged === null ? (
        <div>
        <Home />
        <Create />
        <Leaderboard />
        <Profile />
      </div>
      ) : (
        <div>
          <Home />
          <Create />
          <Leaderboard />
          <Profile />
        </div>
      )}
    </>
  );
}

function mapStateToProps({ logged }) {
  return {
    logged: logged,
  };
}

export default connect(mapStateToProps)(App);
