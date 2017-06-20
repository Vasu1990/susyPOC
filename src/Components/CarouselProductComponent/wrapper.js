import CarouselProduct from './CarouselProduct';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductPrice ,getNextProduct } from '../../actions/carouselProductActions';

export const CarouselProdWrapper = connect(
    //map state to props
    (state , ownProps) => {
        console.log(state);
            return {
            data: state.carouselProductCombinedReducer[ownProps.reducerNamespace]
        };
    } ,  
    //map dispatch to props
    (dispatch, ownProps) => {
        return {
            fetchProduct: () => dispatch(getNextProduct(ownProps.reducerNamespace))
        }
    })(CarouselProduct);