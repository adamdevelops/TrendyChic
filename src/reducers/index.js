import {combineReducers} from 'redux';
import appsReducer from './app.js';


export default combineReducers({
  apps: appsReducer,
})
