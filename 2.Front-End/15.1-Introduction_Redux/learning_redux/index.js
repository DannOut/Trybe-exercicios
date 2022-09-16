const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

store.dispatch(fazerLogin('teste@teste.com'));

console.log(store.getState());