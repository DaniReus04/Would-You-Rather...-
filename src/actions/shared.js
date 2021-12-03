import { getInitialData } from "../data/api";
import { receiveQuestion } from "./questions";
import { receiveUsers } from "./users"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then(({questions, users}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestion(questions))
        })
    }
}