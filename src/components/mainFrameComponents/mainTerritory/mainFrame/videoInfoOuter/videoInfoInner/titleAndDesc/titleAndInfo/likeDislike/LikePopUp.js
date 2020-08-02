import React from 'react';
import styled from 'styled-components';

const LikePopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 4px 10px;
    border-radius: 2px;
    position: absolute;
    top: 150%;
    left: 10%;
    opacity: ${props => props.likeHovering ? 1 : 0};
    font-size: 12px;
    color: white;
    transition: opacity 0.2s ease-out;
    cursor: default;
`;

export default class extends React.Component {
    render() {
        const {
            likeHovering,
            isLike
        } = this.props;
        return (
            <LikePopUpBox
                likeHovering={likeHovering}
            >
                {isLike
                    ? `이 동영상이 마음에 듭니다.`
                    : `이 동영상이 마음에 들지 않습니다.`}
            </LikePopUpBox>
        )
    }
};