export const RECEIVE_LOGGED = "RECEIVE_LOGGED";

export function receiveLogged(id) {
  return {
    type: RECEIVE_LOGGED,
    id,
  };
}
