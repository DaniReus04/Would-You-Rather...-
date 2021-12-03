import { createStore } from "redux";
import reducers from "./reducers/combine";
import middleware from "../middleware/middlewares";

const store = createStore(reducers, middleware)

export default store;