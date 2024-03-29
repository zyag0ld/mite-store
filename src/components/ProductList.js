import React, {Component} from 'react';
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";

class ProductList extends Component {
    state = {
        products: storeProducts
    };

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title name="nuestros" title="productos" />
                            <div className="row">
                            <ProductConsumer>
                                    {value => {
                                        return value.products.map(product => {
                                            return <Product
                                                product={product}
                                                key={product.id}
                                            />
                                        });
                                    }}
                                </ProductConsumer>                                
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default ProductList;