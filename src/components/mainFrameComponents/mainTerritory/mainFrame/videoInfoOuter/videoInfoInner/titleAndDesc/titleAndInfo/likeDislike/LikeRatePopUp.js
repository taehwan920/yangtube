import React from 'react';
import styled from 'styled-components';
import { addComma } from '../../../../../../../../Mixin';

const RatePopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 4px 10px;
    border-radius: 2px;
    position: absolute;
    bottom: 115%;
    left: 10%;
    opacity: ${props => props.rateHovering ? 1 : 0};
    font-size: 12px;
    color: white;
    transition: opacity 0.2s ease-out;
    cursor: default;
`;

export default class extends React.Component {
    render() {
        const {
            rateHovering,
            contentData
        } = this.props;
        const likes = addComma(contentData.likes);
        const dislikes = addComma(contentData.dislikes);
        return (
            <RatePopUpBox
                rateHovering={rateHovering}
            >
                {likes} / {dislikes}
            </RatePopUpBox>
        )
    }
};