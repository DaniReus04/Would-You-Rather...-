import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import logged from "./loggedUser";

export default combineReducers({
    users,
    questions,
    logged,
})

