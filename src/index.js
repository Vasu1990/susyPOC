// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';
import {canUseDOM} from './Utility';

require("expose-loader?serverComponents!./Components");


if(canUseDOM()) {

	let mappedData = {...window.app};

	if(mappedData && mappedData.cartProductCombinedReducer) {
	  for(let reducerKey in window.app.cartProductCombinedReducer) {
			ReactDOM.render(
				<serverComponents.ProductDetail reducerNamespace={reducerKey}/>,
			document.getElementById(reducerKey)); 
		}
	}

	if(mappedData && mappedData.carouselProductCombinedReducer) {
	  for(let reducerKey in window.app.carouselProductCombinedReducer) {
			ReactDOM.render(
				<serverComponents.CarouselProduct reducerNamespace={reducerKey}/>,
			document.getElementById(reducerKey)); 
		}
	}
	
	
	if(window.staticComps  && window.staticComps.dumbComponent) {
		var staticCompData = window.staticComps.dumbComponent;
		for(let reducerKey in staticCompData) {
				console.log(staticCompData,  reducerKey);
			
			ReactDOM.render(
				<serverComponents.DumbComponent name={staticCompData[reducerKey].componentData.name}/>,
			document.getElementById(reducerKey)); 
		}
	}	

}

//  else {
// 			ReactDOM.render(
// 				<serverComponents.ProductDetail data={window.app} />,
// 			document.getElementById("cartProductsReducer1")); 
		
// 			ReactDOM.render(
// 				<serverComponents.ProductDetail data={window.app1} />,
// 			document.getElementById("cartProductsReducer2")); 

// 			ReactDOM.render(
// 				<serverComponents.CarouselProduct data={window.app3} />,
// 			document.getElementById("carouselProductsReducer1")); 
// }