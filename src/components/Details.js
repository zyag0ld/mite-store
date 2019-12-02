import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}

                            {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={img} alt={title} className="img-fluid" />
                                    </div>
                                    {/* product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>modelo: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            hecho por: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                precio: <span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            descripcion:
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        {/* buttons */}
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>volver</ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                disabled={!!inCart}
                                                cart
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                                {inCart ? 'listo' : 'agregar'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            {/* end of product info */}
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;