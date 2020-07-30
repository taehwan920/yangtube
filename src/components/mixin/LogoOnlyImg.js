import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
    height: 21px;
    margin-left: 30px;
    
`;

export default class extends React.Component {
    render() {
        return (
            <LogoImg alt="YangTube" src="./images/youtubefont3.png"></LogoImg>
        )
    }
}