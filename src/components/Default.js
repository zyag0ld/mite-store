import React, {Component} from 'react';
import styled from 'styled-components';

class Default extends Component {
    render() {
        return (
            <DefaultWrapper>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-title">
                        <h1 className="display-3">404</h1>
                            <h1>error</h1>
                            <h2>page not found</h2>
                            <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
                        </div>
                    </div>
                </div>
            </DefaultWrapper>
        );
    }
}

const DefaultWrapper = styled.nav`
    height: 32em;
    dislay: flex;
    position: realtive;
    vertical-align: middle
`;

export default Default;