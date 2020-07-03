import {combineReducers} from 'redux';
import appsReducer from './app.js';


const trendychicApp = combineReducers({
  apps: appsReducer,
})

export default trendychicApp;
