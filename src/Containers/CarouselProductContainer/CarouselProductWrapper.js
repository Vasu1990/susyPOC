import React,{Component} from 'react'
import {Provider} from 'react-redux';
import {CarouselProdWrapper} from '../../Components/CarouselProductComponent/wrapper';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import {canUseDOM} from '../../Utility';


export default class CarouselProductWrapper extends Component {
    store = createGlobalStore();

      render() {
            return (
               <Provider store={this.store}>    
                    <CarouselProdWrapper reducerNamespace = {this.props.reducerNamespace}/>
                </Provider> 
            )
      }
}


