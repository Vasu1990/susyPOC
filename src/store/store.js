import {creteMainReducer}  from '../reducers/ContainerReducer/main';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {canUseDOM} from '../Utility';

import { combineReducers } from 'redux';
import cartProductReducer from '../reducers/CartProductReducer/cartProduct';


  //set initial data depending on client or server
  const storeData = canUseDOM() ? window.app : data;
  const mainReducer = creteMainReducer(storeData);

export function createGlobalStore(data = {}) {
  let store ;

  if(canUseDOM()) {
   //   for client
        if(window.store) {
              store = window.store;
          } else {
            window.store = createStore(mainReducer, window.app , applyMiddleware(thunk));
             store = window.store;
         }
     
  }else {
   // for server   
        store = createStore(mainReducer, data , applyMiddleware(thunk));
        
  }
  
    return store;
}