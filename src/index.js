// import these files from their respective folders
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  ReactDOMServer from 'react-dom/server';
import {canUseDOM ,  simulateServer} from './Utility';

require("expose-loader?serverComponents!./Components");
require("expose-loader?serverOnlyComponents!./Containers");

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

	if(document.getElementById("google-map") !== null) {
			ReactDOM.render(
				<serverComponents.GoogleMapComp /> ,
			document.getElementById("google-map")); 
		
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

 else {
	if(simulateServer()) {
			ReactDOM.render(
				<serverComponents.ProductDetail data={window.app} />,
			document.getElementById("cartProductsReducer1")); 
		
			ReactDOM.render(
				<serverComponents.ProductDetail data={window.app1} />,
			document.getElementById("cartProductsReducer2")); 

			ReactDOM.render(
				<serverOnlyComponents.CarouselProdWrapper data={window.app3}/>,
			document.getElementById("carouselProductsReducer3")); 
	}
}	