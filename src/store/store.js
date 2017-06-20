import {creteMainReducer}  from '../reducers/ContainerReducer/main';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {canUseDOM} from '../Utility';

import { combineReducers } from 'redux';
import cartProductReducer from '../reducers/CartProductReducer/cartProduct';


 
export function createGlobalStore(data = {}) {
  let store ;
  var reducer;

    if(window.store) {
          store = window.store;
      } else {
          //set initial data depending on client or server
        reducer = creteMainReducer(window.app);
        console.log(reducer , "reducer");
        window.store = createStore(reducer.mainReducer, reducer.reducerState , applyMiddleware(thunk));
        store = window.store;
      }
     
    return store;
}