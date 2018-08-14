
const INITIAL_STATE = { all: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case `FETCH_COMPANIES_SUCCESS`:
      return { 
        ...state, 
        all: action.payload.data.results 
      }
    default:
      return state;
  }
}
