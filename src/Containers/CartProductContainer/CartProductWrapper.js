import React,{Component} from 'react'
import {Provider} from 'react-redux';
import CartProduct from '../../Components/CartProductComponets/CartProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import combinedReducers  from '../../reducers/ContainerReducer/main';



export default class ProductDetailWrapper extends Component {
            store = createGlobalStore(this.props.data);
             canUseDOM = typeof window !== 'undefined' && window.document && window.document.createElement;
             namespace = "cartProductsReducer"
      render() {
            if(this.canUseDOM){
                  this.namespace = this.props.namespace;
             }
            return (
               <Provider store={this.store}>    
                    <CartProduct namespace= {this.namespace}/>
                </Provider> 
            )
      }
}


