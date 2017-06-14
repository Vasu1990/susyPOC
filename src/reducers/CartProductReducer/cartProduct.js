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
	
      case LOAD_PRICE:
    //    let cartItems = [...cartProductData.cartProducts];
       
    //     cartItems.forEach(function(product) {
    //         action.payload.forEach(function(item) {
    //             if(product.productId == item.id) {
    //                 product.productPrice = item.price
    //             }
    //         }, this);
    //     }, this);
    //     cartProductData.cartProducts = cartItems;

         return {...cartProductData};

         case LOAD_PRODUCT:
         console.log(action.payload);
         console.log(cartProductData.cartProduct , "reducer data");
              let data;
               action.payload.product.forEach(function(item) {
                    if(cartProductData.cartProduct.productId + 1 == item.productId) {
                        data = item;
                        return;
                    }
                }, this);

                cartProductData.cartProduct = data;
         return {...cartProductData};

      default:
      return {...cartProductData};
   }
}



const cartProductCombinedReducer = combineReducers({cartProductsReducer});

export default cartProductCombinedReducer;

