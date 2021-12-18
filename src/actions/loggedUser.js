export const SET_LOGGED = "SET_LOGGED";

export function receiveLogged(id) {
  return {
    type: SET_LOGGED,
    id,
  };
}
