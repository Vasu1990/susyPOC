import axios from 'axios';


export const LOAD_PRICE = 'LOAD_PRICE';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';

export function getProductPrice(product) {
    return function(dispatch) {
        axios.get("../../public/data/product-price.json")
        .then(res => {
            	dispatch({type:LOAD_PRICE , payload:res.data.productPrice});
        })
    }
}

export function getNextProduct(namespace) {
   return function(dispatch , getState) {
        let product = getState().carouselProductCombinedReducer[namespace].carouselProduct; 
       
        axios.get(window.apiUrl.productDetail + "?id=" + parseInt(product.productId + 1))
        .then(res => {
                let apiProduct = res.data.product || {};
                 axios.get("../../public/data/product-price.json?id=" + apiProduct.productId)
                .then(res => {
                            apiProduct.productPrice = res.data.productPrice || 0;
                        	dispatch({type:`${namespace}${LOAD_PRODUCT}` , payload:apiProduct});
                })
        })
    }
}