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

export function getNextProduct() {
   return function(dispatch) {
        let product = store.getState().cartProductCombinedReducer.cartProductsReducer.cartProduct; 
       
        axios.get("../../public/data/product-detail.json?id=" + product.productId + 1)
        .then(res => {
                let apiProduct = res.data.product || {};
                 axios.get("../../public/data/product-price.json?id=" + apiProduct.productId)
                .then(res => {
                            apiProduct.productPrice = res.data.productPrice || 0;
                        	dispatch({type:LOAD_PRODUCT , payload:apiProduct});
                })
        })
    }
}