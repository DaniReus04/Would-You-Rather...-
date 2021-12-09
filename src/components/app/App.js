import { Provider } from "react-redux";
import store from "../../store/store";
import Create from "../../pages/create/create";
import Leaderboard from "../../pages/leaderboard/leaderboard";
import Profile from "../../pages/profile/profile";
import Home from "../../pages/home/home";
import { handleInitialData } from "../../actions/shared";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    store.dispatch(handleInitialData())
  })
  return (
    <Provider store={store}>
      <Home/>
      <Create/>
      <Leaderboard/>
      <Profile/>
    </Provider>
  );
}

export default (App);
