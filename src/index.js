// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';

require("expose-loader?serverComponents!./Components");

var canUseDOM = typeof window !== 'undefined' && window.document && window.document.createElement;


if(canUseDOM) {
	if(document.getElementById('product-detail').length!==null) {
		let tempData =  {cartProductCombinedReducer: {
                cartProductsReducer: {
                  labels : {
                     productName : "Product Name",
                     productPrice: "Product Price",
                     productId : "Id",
                     title : "This is  product detail"
                  },
                  cartProduct : {
                      productName : "Hero Cycles",
                      productImage : "https://images.apple.com/uk/pr/products/images/iPhone6_34FR_SpGry_iPhone6plus_34FL_SpGry_Homescreen_HERO.jpg",
                      productId :  1 ,
                      productPrice :  0
                    }
                }
              }    }
		ReactDOM.render(
			<serverComponents.ProductDetail data={tempData}/>,
		document.getElementById('product-detail')); 
	}
}


