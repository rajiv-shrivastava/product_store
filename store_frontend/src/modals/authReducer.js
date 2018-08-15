
const INITIAL_STATE = { isAuthenticated: false};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case `SET_TOKEN_SUCCESS`:      
      localStorage.setItem('user_token', action.payload.data.jwt);      
      window.location.replace("http://localhost:3000/dashboard");
      isAuthenticated: true
    default:
      return state;
  }
}
