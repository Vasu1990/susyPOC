import { combineReducers } from 'redux'
import { LOAD_PRICE , LOAD_PRODUCT} from '../../actions/cartProductActions'



const cartProductsReducer  = (namespace) =>(cartProductData = {
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

var reducerObj = {};
  for(var reducerKey in window.app.cartProductCombinedReducer) {
      reducerObj[reducerKey] = cartProductsReducer(reducerKey);
  }
  console.log(reducerObj ,"reducer obj");

const cartProductCombinedReducer = combineReducers(reducerObj);

export default cartProductCombinedReducer;

