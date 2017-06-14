// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';

require("expose-loader?serverComponents!./Components");

var canUseDOM = typeof window !== 'undefined' && window.document && window.document.createElement;


if(canUseDOM) {
	if(document.getElementById('product-detail').length!==null) {
		ReactDOM.render(
			<serverComponents.ProductDetail/>,
		document.getElementById('product-detail')); 
	}
}


