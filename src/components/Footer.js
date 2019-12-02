import React, {Component} from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
           <FootWrapper className="navbar bg-blue navbar-dark px-sm-5">
                <p className="nav-link text-center col-10 mx-auto my-2 text-center text-title">
                    Hecho por CMJA y VTZD para Ingenieria Web 2020-1
                </p>
            </FootWrapper>
        );
    }
}

const FootWrapper = styled.nav`
    background: var(----mainBlue);
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 0.75rem;
        text-transform: capitalize!important;
    }
`;

export default Footer;