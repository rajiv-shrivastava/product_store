
const INITIAL_STATE = { isAuthenticated: false};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case `SET_TOKEN_SUCCESS`:
      localStorage.removeItem('user_token');
      localStorage.setItem('user_token', action.payload.data.jwt);
      isAuthenticated: true
    default:
      return state;
  }
}
