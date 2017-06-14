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
        axios.get("../../public/data/product-detail.json")
        .then(res => {
            	dispatch({type:LOAD_PRODUCT , payload:res.data});
        })
    }
}