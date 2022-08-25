import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { registerReducer } from './registers';

const rootReducer = combineReducers({ loginReducer, registerReducer });

export default rootReducer;
