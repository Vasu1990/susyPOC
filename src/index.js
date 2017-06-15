// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';

require("expose-loader?serverComponents!./Components");

var canUseDOM = typeof window !== 'undefined' && window.document && window.document.createElement;


if(canUseDOM) {

	let mappedData = {...window.app};

	if(mappedData.cartProductCombinedReducer) {
	  for(let reducerKey in window.app.cartProductCombinedReducer) {
		  	var componentData = {
					namespace : reducerKey
			}
			ReactDOM.render(
				<serverComponents.ProductDetail data={componentData}/>,
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

} else {

			var componentData = {
					namespace : "cartProductsReducer"
			}
			ReactDOM.render(
				<serverComponents.ProductDetail data={componentData }/>,
			document.getElementById("cartProductsReducer")); 
		
	
}