
const INITIAL_STATE = { 
	products: [],
	createProduct: null,
	updateProduct: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case `FETCH_PRODUCTS_SUCCESS`:
      return { 
        ...state, 
        products: action.payload.data 
      }
      case `CREATE_PRODUCTS_SUCCESS`:
      return { 
        ...state, 
        createProduct: action.payload.data 
      }
      case `UPDATE_PRODUCTS_SUCCESS`:
      return { 
        ...state, 
        updateProduct: action.payload.data 
      }
    default:
      return state;
  }
}
