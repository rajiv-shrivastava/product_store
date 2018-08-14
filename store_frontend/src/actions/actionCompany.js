import api from './api';

export function deleteCompany(companyId) {
  return {
    type: 'REMOVE_COMPANY',
    payload: api.delete(`companies/${companyId}`),
    meta: {
      id: companyId,
    },
  };
}

export function addCompany(company) {
  return {
    type: 'ADD_COMPANY',
    payload: api.post('user_token', company),
  };
}

export function toggleCreateCompany() {
  return {
    type: 'TOGGLE_CREATE_COMPANY',
  };
}

export function selectCompany(company) {
  return {
    type: 'SELECT_COMPANY',
    payload: { data: company },
  };
}

export function updateCompany(companyId, company) {
  return {
    type: 'UPDATE_COMPANY',
    payload: api.patch(`companies/${companyId}`, company),
  };
}

export function fetchCompanies() {
  return {
    type: 'FETCH_COMPANIES',
    payload: api.get('/?amount=10&difficulty=hard&type=boolean'),
  };
}
