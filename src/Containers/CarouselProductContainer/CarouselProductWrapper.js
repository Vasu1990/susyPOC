import React,{Component} from 'react'
import {Provider} from 'react-redux';
import CarouselProduct from '../../Components/CarouselProductComponent/CarouselProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import {canUseDOM} from '../../Utility';


export default class CarouselProductWrapper extends Component {
            store = createGlobalStore(this.props.data);
            reducerNamespace;
           
            getReducerNamespace = () => {
                   if(canUseDOM()) {
                        this.reducerNamespace = this.props.reducerNamespace
                    } else {
                            for(var guids in this.props.data) {
                                for(var guid in this.props.data[guids]) {
                                    this.namespace = guid;
                                }
                          }
                    }
                return this.reducerNamespace;
            }

      render() {
            return (
               <Provider store={this.store}>    
                    <CarouselProduct reducerNamespace = {this.getReducerNamespace()}/>
                </Provider> 
            )
      }
}


