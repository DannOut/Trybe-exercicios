import { REGISTER_COSTUMER, LOGIN } from './types';

export const registerCostumer = (costumerData) => ({
  type: REGISTER_COSTUMER,
  payload: costumerData,
});

export const loginAction = (userData) => {
return ({
  type: LOGIN,
  payload: userData,
})
}
