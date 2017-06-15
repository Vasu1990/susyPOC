import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductPrice ,getNextProduct } from '../../actions/cartProductActions';


import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {createGlobalStore} from '../../store/store';



class CartProduct extends Component {
    renderCartRows = (product ,labels) => {
            return (
                <dt className="cart-product" key={product.productId}>
                    <strong dangerouslySetInnerHTML={{ __html: product.productImage}}></strong>
                    <ul>
                        <li><strong dangerouslySetInnerHTML={{ __html: labels.productId }}></strong>
                             <label dangerouslySetInnerHTML={{ __html: product.productId }}></label>    
                         </li>
                        <li>
                            <strong dangerouslySetInnerHTML={{ __html: labels.productName }}></strong> 
                           <a href={product.link}><label dangerouslySetInnerHTML={{ __html: product.productName }}></label>   </a>
                        </li>
                        <li>
                            <strong dangerouslySetInnerHTML={{ __html: labels.productPrice }}></strong> 
                            <label dangerouslySetInnerHTML={{ __html: product.productPrice }}></label>      
                        </li>
                    </ul>
                </dt>
            );
    };

    fetchNextProduct = () => {
        this.props.fetchProduct(this.props.namespace);
        // this.props.dispatch(getNextProduct(this.props.namespace));
    }

    showNoProduts = () => {
        return (
             <dt className="cart-product">
                 <h3>No More products</h3>
                 </dt>
        )
    }

    componentDidMount() {
        // this.props.dispatch(getProductPrice());
    }


    render() {
    console.log("component rendered " , this.props);

        return (

            <div className="page checkout-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>This is a smart component fetching new produc through ajax on every click</h1>
                            <h2 dangerouslySetInnerHTML={{ __html: this.props.labels.title }}></h2>
                            <dl className="cart-products">
                                {this.props.productDetail? 
                                    this.renderCartRows(this.props.productDetail , this.props.labels) : 
                                    this.showNoProduts()
                                }
                            </dl>
                        <button  className="next-button" onClick = { () => this.fetchNextProduct() }>next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state , ownProps) => {
    console.log(state , "product detail state");
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


export default connect(mapStateToProps , mapDispatchToProps)(CartProduct);