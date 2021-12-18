import { useDispatch } from "react-redux";
import { setAuthed } from "../../actions/authedUser";

function useProfile() {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(setAuthed(e.target.value));
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <h3>Welcome user</h3>
      <p>Already have an acount? Login here</p>
        <select value="" onChange={onChange}>
          <option>Who are you?</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="sarahedo">Sarah Edo</option>
          <option value="johndoe">John Doe</option>
        </select>
    </div>
  );
}

export default useProfile;
