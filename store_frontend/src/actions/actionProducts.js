import api from './api';

export function fetchProducts() {
  return {
    type: 'FETCH_PRODUCTS',
    payload: api.get('products'),
  };
}
