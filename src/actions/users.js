export const RECEIVE_USER = "RECEIVE_USER";

export function receiveUsers(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}
