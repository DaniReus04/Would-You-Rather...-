import { connect } from "react-redux";

function profile(props) {
  console.log("props:", props)
  return (
    <div>
      <h2>Profile Information</h2>
      <form>
        <h3>Welcome user</h3>
        <p>Already have an acount? Login here</p>
        <select defaultValue="Who are you?">
          <option disabled>
            Who are you?
          </option>
          <option>Tyler McGinis</option>
          <option>Sarah Edo</option>
          <option>John Doe</option>
        </select>
      </form>
    </div>
  );
}

function mapStateToProps({ logged }){
 return{
  logged: logged,
 }
}

export default connect(mapStateToProps)(profile);
