import React from 'react';
import styled from 'styled-components';

export default function EmptyCart() {
    return (
        <EmptyWrapper>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>no has seleccionado ningun articulo</h1>
                    </div>
                </div>
            </div>
        </EmptyWrapper>
        
    );
}

const EmptyWrapper = styled.nav`
    height: 32em;
    dislay: flex;
    position: realtive;
    vertical-align: middle
`;