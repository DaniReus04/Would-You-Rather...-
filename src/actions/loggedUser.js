export const SET_LOGGED = "SET_LOGGED";

export function setLogged(id) {
  return {
    type: SET_LOGGED,
    id,
  };
}
