// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';
import {canUseDOM} from './Utility';

require("expose-loader?serverComponents!./Components");


if(canUseDOM()) {

	let mappedData = {...window.app};

	if(mappedData.cartProductCombinedReducer) {
	  for(let reducerKey in window.app.cartProductCombinedReducer) {
			ReactDOM.render(
				<serverComponents.ProductDetail namespace={reducerKey}/>,
			document.getElementById(reducerKey)); 
		}
	}
	
	
	if(window.staticComps.dumbComponent) {

		for(let reducerKey in window.staticComps.dumbComponent) {
				console.log(window.staticComps.dumbComponent,  reducerKey);
			
			ReactDOM.render(
				<serverComponents.DumbComponent name={window.staticComps.dumbComponent[reducerKey].componentData.name}/>,
			document.getElementById(reducerKey)); 
		}
	}	

}

 else {
			ReactDOM.render(
				<serverComponents.ProductDetail data={window.app} namespace = "cartProductsReducer1"/>,
			document.getElementById("cartProductsReducer1")); 
		
			ReactDOM.render(
				<serverComponents.ProductDetail data={window.app1} namespace = "cartProductsReducer2"/>,
			document.getElementById("cartProductsReducer2")); 
}