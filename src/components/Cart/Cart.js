import React, {Component} from 'react';
import styled from 'styled-components';
import Title from  '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <CartWrapper>
                <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;

                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Tu" title="carrito" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                            return ( <EmptyCart /> );
                        }
                    }}
                </ProductConsumer>
            </section>
            </CartWrapper>
        );
    }
}

const CartWrapper = styled.nav`
    height: 33em;
    dislay: flex;
    position: realtive;
    vertical-align: middle
`;

export default Cart;