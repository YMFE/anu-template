import {
  FETCH_REPOS,
} from '../constants/actionTypes';

const initialState = {
  publicList: [],
};

export default (state = initialState, action) => {
  const { payload } = action
  console.log(payload)
  switch (action.type) {
    case FETCH_REPOS: {
      return {
        ...state,
        publicList: payload,
      };
    }
    default:
      return state;
  }
};
