import React,{Component} from 'react'
import {Provider} from 'react-redux';
import CartProduct from '../../Components/CartProductComponets/CartProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import combinedReducers  from '../../reducers/ContainerReducer/main';



export default class ProductDetailWrapper extends Component {
      
      render() {
            let data;
            if(this.props.data) {
                  data = this.props.data;
            }
            let store = createGlobalStore(data);
            return (
               <Provider store={store}>    
                    <CartProduct />
                </Provider> 
            )
      }
}


