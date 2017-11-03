import { FETCH_REPOS } from '../constants/actionTypes';

export function fetchAllRepo(pageNum, pageSize) {
  return {
    type: FETCH_REPOS,
    payload: `我的天空`,
  };
}
