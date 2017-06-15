import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductPrice ,getNextProduct } from '../../actions/cartProductActions';
import {Provider} from 'react-redux';
import CartProduct from './CartProduct';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';
import combinedReducers  from '../../reducers/ContainerReducer/main';
import {canUseDOM} from '../../Utility';

 class CartWrapper extends Component {
      render() {
            return (
                    <CartProduct/>
            )
      }
}


const mapStateToProps = (state , ownProps) => {
    console.log(ownProps , "product detail ownProps");
        return {
        productDetail: state.cartProductCombinedReducer[ownProps.namespace].cartProduct,
        labels: state.cartProductCombinedReducer[ownProps.namespace].labels
    };
};


const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        fetchProduct: () => dispatch(getNextProduct(ownProps.namespace))
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CartWrapper);