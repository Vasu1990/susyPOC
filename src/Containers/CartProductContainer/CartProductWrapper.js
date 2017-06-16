import React,{Component} from 'react'
import {Provider} from 'react-redux';
import CartProduct from '../../Components/CartProductComponets/CartProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import combinedReducers  from '../../reducers/ContainerReducer/main';
import {canUseDOM} from '../../Utility';


export default class ProductDetailWrapper extends Component {
            store = createGlobalStore(this.props.data);
      render() {
            return (
               <Provider store={this.store}>    
                    <CartProduct reducerNamespace= {this.props.reducerNamespace}/>
                </Provider> 
            )
      }
}


