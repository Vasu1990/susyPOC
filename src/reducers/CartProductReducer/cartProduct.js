import { combineReducers } from 'redux'
import { LOAD_PRICE , LOAD_PRODUCT} from '../../actions/cartProductActions'
import {canUseDOM} from '../../Utility';


const cartProductsReducer  = (namespace = "cartProductsReducer") =>(cartProductData = {
                    labels: {
                     productName : "",
                     productPrice: "",
                     productId : "",
                     title: ""
                    },
                    cartProduct:{
                      productImage : "",  
                      productName : "",
                      productId :  0 ,
                      productPrice :  0
                    }}, action) => {
   switch (action.type) {

         case `${namespace}${LOAD_PRODUCT}`:
            cartProductData.cartProduct = action.payload;
         return {...cartProductData};

      default:
      return {...cartProductData};
   }
}



var cartProductCombinedReducer;
if(canUseDOM()) {
  var reducerObj = {};
    for(var reducerKey in window.app.cartProductCombinedReducer) {
        reducerObj[reducerKey] = cartProductsReducer(reducerKey);
    }
    console.log(reducerObj ,"reducer obj");

   cartProductCombinedReducer = combineReducers(reducerObj);
}else {
  cartProductCombinedReducer = combineReducers({cartProductsReducer : cartProductsReducer()});
}

export default cartProductCombinedReducer;

