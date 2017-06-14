import { combineReducers } from 'redux'
import { LOAD_PRICE , LOAD_PRODUCT} from '../../actions/cartProductActions'



function cartProductsReducer(cartProductData = {
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
                    }}, action) {
   switch (action.type) {

         case LOAD_PRODUCT:
            cartProductData.cartProduct = action.payload;
         return {...cartProductData};

      default:
      return {...cartProductData};
   }
}
const cartProductCombinedReducer = combineReducers({cartProductsReducer});

export default cartProductCombinedReducer;

