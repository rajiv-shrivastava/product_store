import api from './api';

export function getToken(userData) {
  return {
    type: 'SET_TOKEN',
    payload: api.post('user_token', userData),
  };
}