import { combineReducers } from 'redux'
import { LOAD_PRICE , LOAD_PRODUCT} from '../../actions/carouselProductActions'
import {canUseDOM} from '../../Utility';


const carouselProductReducer  = (namespace = "carouselProductReducer") =>(carouselProductData = {
                    labels: {
                      productName : "",
                      productImage : "",
                      productId :  "" ,
                      productPrice :  "",
                      productLink : "" 
                    },
                    carouselProduct:{
                      productName : "",
                      productImage : "",
                      productId :  1 ,
                      productPrice :  0,
                      productLink : "" 
                    }}, action) => {
   switch (action.type) {

         case `${namespace}${LOAD_PRODUCT}`:
            carouselProductData.carouselProduct = action.payload;
         return {...carouselProductData};

      default:
      return {...carouselProductData};
   }
}

export default carouselProductReducer;

