import React,{Component} from 'react'
import {Provider} from 'react-redux';
import CartProduct from '../../Components/CartProductComponets/CartProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import combinedReducers  from '../../reducers/ContainerReducer/main';
import {canUseDOM} from '../../Utility';


export default class ProductDetailWrapper extends Component {
            store = createGlobalStore(this.props.data);
            namespace;
           
            getReducerNamespace = () => {
                   if(canUseDOM) {
                        this.namespace = this.props.reducerNamespace
                    } else {
                          for(var key in this.props.data) {
                                    namespace = key;
                          }
                    }
                return this.namespace;
            }



      render() {
            return (
               <Provider store={this.store}>    
                    <CartProduct reducerNamespace = {this.getReducerNamespace()}/>
                </Provider> 
            )
      }
}


