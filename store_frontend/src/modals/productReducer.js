
const INITIAL_STATE = { 
	products: [],
	createProduct: null,
	updateProduct: null,
  productSale: null
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
      case `ADD_PRODUCTSALE_SUCCESS`:
      return { 
        ...state, 
        productSale: action.payload.data 
      }
      
    default:
      return state;
  }
}
