
const INITIAL_STATE = { products: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case `FETCH_PRODUCTS_SUCCESS`:
      return { 
        ...state, 
        products: action.payload.data.results 
      }
    default:
      return state;
  }
}
