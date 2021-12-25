import { useDispatch } from "react-redux";
import { setAuthed } from "../../actions/authedUser";

function useProfile() {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(setAuthed(e.target.value));
  };

  return (
    <div className="min-h-screen py-56 bg-zinc-900">
      <div className="grid items-start justify-center">
      <div className="bg-neutral-100 w-80 h-40 px-8 py-4 rounded-xl text-neutral-900 shadow-xl shadow-slate-400">
      <h2 className="font-bold">Welcome user</h2>
      <h3 className="py-4">Please choose an account!</h3>
        <select value="" onChange={onChange} className="w-56 px-2 py-1 rounded-lg bg-zinc-200 font-semibold pointer-events-auto">
          <option>Who are you?</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="sarahedo">Sarah Edo</option>
          <option value="johndoe">John Doe</option>
        </select>
      </div> 
      </div>
    </div>
  );
}

export default useProfile;
