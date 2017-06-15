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

export default cartProductsReducer;

