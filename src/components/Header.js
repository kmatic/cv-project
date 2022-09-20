import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <HeaderWrapper className='header'>
                <p>CV GENERATOR</p>
            </HeaderWrapper>
        );
    }
}

const HeaderWrapper = styled.header`
    background-color: #363740;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
        margin: 0;
        font-size: 3rem;
    }
`;

export default Header