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
		window.app.cartProductCombinedReducer.forEach(function(component) {
			ReactDOM.render(
				<serverComponents.ProductDetail reducerNamespace={component.guid}/>,
			document.getElementById(component.guid)); 
		}, this);
	}

	if(mappedData && mappedData.carouselProductCombinedReducer) {
		window.app.carouselProductCombinedReducer.forEach(function(component) {
			ReactDOM.render(
				<serverComponents.CarouselProduct reducerNamespace={component.guid}/>,
			document.getElementById(component.guid)); 
		}, this);
	}

	// if(document.getElementById("google-map") !== null) {
	// 		ReactDOM.render(
	// 			<serverComponents.GoogleMapComp /> ,
	// 		document.getElementById("google-map")); 
		
	// }
		
	
	// if(window.staticComps  && window.staticComps.dumbComponent) {
	// 	var staticCompData = window.staticComps.dumbComponent;
	// 	for(let reducerKey in staticCompData) {
	// 			console.log(staticCompData,  reducerKey);
			
	let id = undefined;
	for(let i =0; i<window.reactComponents.map.length; i++) {
	
	ReactDOM.render(
		<serverOnlyComponents.Map data={window.reactComponents.map[i].data}/>,
	document.getElementById(window.reactComponents.map[i]["guid"])); 
	} 
		
	// }	

}

 else {
	if(simulateServer()) {
			// ReactDOM.render(
			// 	<serverComponents.ProductDetail data={window.app} />,
			// document.getElementById("cartProductsReducer1")); 
		
			// ReactDOM.render(
			// 	<serverComponents.ProductDetail data={window.app1} />,
			// document.getElementById("cartProductsReducer2")); 

			ReactDOM.render(
				<serverOnlyComponents.CarouselProdWrapper data={window.app3}/>,
			document.getElementById("carouselProductsReducer3"));

			ReactDOM.render(
				<serverOnlyComponents.Map data={window.reactComponents.map.data}/>,
			document.getElementById("map"));  
	}
}	