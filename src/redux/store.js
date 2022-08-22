import {createStore, combineReducers} from 'redux';
import {loginReducer} from './reducer/loginReducer';

const rootReduce = combineReducers({
  loginData: loginReducer,
});

export default createStore(rootReduce);
