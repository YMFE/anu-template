import {
  FETCH_REPOS,
} from '../constants/actionTypes';

const initialState = {
  publicList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS: {
      return {
        ...state,
        publicList: '测试用例',
      };
    }
    default:
      return state;
  }
};
