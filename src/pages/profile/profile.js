import { connect } from "react-redux";
import { useState } from "react";
import { setLogged } from "../../actions/loggedUser";

function useProfile(props) {
  const [logIn, setLogIn] = useState("");

  const onChange = ({ logIn }) => {
    setLogIn({ logIn });
  };

  const onChoose = (e) => {
    e.preventDefault();
    const { setLogged } = props.setLogged;

    setLogged(logIn);
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <h3>Welcome user</h3>
      <p>Already have an acount? Login here</p>
      <form onSubmit={onChoose}>
        <select value={logIn} onChange={onChange}>
          <option>Who are you?</option>
          <option>tylermcginnis</option>
          <option>sarahedo</option>
          <option>johndoe</option>
        </select>
      </form>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  };
}

export default connect(mapStateToProps, { setLogged })(useProfile);
