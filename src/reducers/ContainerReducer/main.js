import { combineReducers } from 'redux';
import cartProductReducer from '../CartProductReducer/cartProduct';


const mainReducer = combineReducers({cartProductCombinedReducer : cartProductReducer});

export default mainReducer;

