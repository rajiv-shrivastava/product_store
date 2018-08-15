import api from './api';

export function fetchProducts() {
  return {
    type: 'FETCH_PRODUCTS',
    payload: api.get('products'),
  };
}


export function createProduct(data) {
  return {
    type: 'CREATE_PRODUCTS',
    payload: api.post('products', data),
  };
}

export function addSales(id) {
  return {
    type: 'ADD_PRODUCTSALE',
    payload: api.get(`/products/sales/${id}`),
  };
}


export function updateProduct(data) {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: api.post(`product/${data.productId}`, data),
  };
}
