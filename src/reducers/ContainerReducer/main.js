import {canUseDOM} from '../../Utility';
import { combineReducers } from 'redux';
import cartProductReducer from '../CartProductReducer/cartProduct';
import carouselProductReducer from '../CarouselProductReducer/carouselProduct';


export const creteMainReducer = (storeData) => {

    // 1st loop to find parent reducer
    var combinedReducerObject = {};
    var combinedInitailState = {};
    var reducer = {
        mainReducer : {},
        reducerState : {}
    }


    for(var components in storeData) {
      let reducerObj = {};
      let initialState = {};
      let reducerFunction;

// 2nd loop to get rach GUID of a reducer to make multiple instances
      storeData[components].forEach(function(componentInstance) {
           switch(componentInstance.reducerName) {
                    //find matching reducer to select the reducer function
                    case "cartProductReducer" :
                        reducerFunction = cartProductReducer;
                    break;
                    case "carouselProductReducer" :
                        reducerFunction = carouselProductReducer;
                    break;

                        default : 
                        reducerFunction = function(){};
                }
                 //execute the reducer function with specific GUID as namespace for a reducer
            reducerObj[componentInstance.guid] = reducerFunction(componentInstance.guid);
            initialState[componentInstance.guid] = componentInstance.data;
      }, this);


          console.log(reducerObj ,"reducer obj");

         //add it to main reducer object with key as parent reducer name and value of combine reducers
           combinedReducerObject[components] =   combineReducers(reducerObj);
           combinedInitailState[components] =  initialState;

           console.log(combinedInitailState , "final state");
           console.log(combinedReducerObject , "final struct");
    }
      //combine all main reducers
        reducer.mainReducer = combineReducers(combinedReducerObject);
        reducer.reducerState = combinedInitailState;
        return reducer;
}



// reference code

      // var reducerObj = {};
      //     for(var reducerKey in data.cartProductCombinedReducer) {
      //         reducerObj[reducerKey] = cartProductReducer(reducerKey);
      //     }
      //     console.log(reducerObj ,"reducer obj");
      //  var cartProductCombinedReducer = combineReducers(reducerObj);

      //   const mainReducer = combineReducers({cartProductCombinedReducer : cartProductCombinedReducer});