import {creteMainReducer}  from '../reducers/ContainerReducer/main';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {canUseDOM} from '../Utility';

import { combineReducers } from 'redux';
import cartProductReducer from '../reducers/CartProductReducer/cartProduct';


 
export function createGlobalStore(data = {}) {
  let store ;
  const storeData = canUseDOM() ? window.app : data;
  var mainReducer;

  if(canUseDOM()) {
   //   for client
        if(window.store) {
              store = window.store;
          } else {
              //set initial data depending on client or server
            mainReducer = creteMainReducer(storeData);
            window.store = createStore(mainReducer, window.app , applyMiddleware(thunk));
            store = window.store;
         }
     
  }else {
   // for server  
        mainReducer = creteMainReducer(storeData); 
        store = createStore(mainReducer, data , applyMiddleware(thunk));
  }
  
    return store;
}