import { FETCH_REPOS } from '../constants/actionTypes';

export function fetchAllRepo() {
  return {
    type: FETCH_REPOS,
    payload: '动态获取的数据' 
  };
}
