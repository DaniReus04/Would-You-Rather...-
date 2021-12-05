import { Provider } from "react-redux";
import store from "../../store/store";
import QuestionBox from "../questionBox/questionBox";
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
      <QuestionBox />
    </Provider>
  );
}

export default (App);
