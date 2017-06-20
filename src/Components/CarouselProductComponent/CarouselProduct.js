import React, { Component } from 'react';


export default class CarouselProduct extends Component {
    renderCartRows = (product ,labels) => {
            return (
               <dt className="cart-product" key={product.productId}>
                    <strong dangerouslySetInnerHTML={{ __html: product.productImage}}></strong>
                    Link
                    <strong dangerouslySetInnerHTML={{ __html: product.productLink}}></strong>
                
                    <ul>
                        <li><strong dangerouslySetInnerHTML={{ __html: labels.productId }}></strong>
                             <label dangerouslySetInnerHTML={{ __html: product.productId }}></label>    
                         </li>
                        <li>
                            <strong dangerouslySetInnerHTML={{ __html: labels.productName }}></strong> 
                            <label dangerouslySetInnerHTML={{ __html: product.productName }}></label> 
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
                            <h2 dangerouslySetInnerHTML={{ __html: this.props.data.labels.title }}></h2>
                            <dl className="cart-products">
                                {this.props.data? 
                                    this.renderCartRows(this.props.data.carouselProduct , this.props.data.labels) : 
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