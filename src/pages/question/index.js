import { useSelector } from "react-redux";

function useQuestion () {
    const state = useSelector(state => state.questions)
    console.log("state:", Object.keys(state))
    return(
        <div>This is question box</div>
    )
}

export default useQuestion;
