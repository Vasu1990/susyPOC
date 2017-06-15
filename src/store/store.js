import combinedReducers  from '../reducers/ContainerReducer/main';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {canUseDOM} from '../Utility';



export function createGlobalStore(data = {}) {
  let store ;
  if(canUseDOM()) {
   //   for client
        if(window.store) {
              store = window.store;
          } else {
            window.store = createStore(combinedReducers, window.app , applyMiddleware(thunk));
             store = window.store;
         }
     
  }else {
   // for server   
        store = createStore(combinedReducers, data , applyMiddleware(thunk));
        
  }
  
    return store;
}