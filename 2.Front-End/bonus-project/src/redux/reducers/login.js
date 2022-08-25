import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const loginReducer = (state = INITIAL_STATE, {type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};
