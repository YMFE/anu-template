import { FETCH_REPOS } from '../constants/actionTypes';

export function fetchAllRepo() {
  return {
    type: FETCH_REPOS,
    payload: fetch('http://localhost:3000/index', {method: 'GET'})  
  };
}
