import React from 'react';
import styled from 'styled-components';
import NextThumb from './nextBtn/NextThumb';

const NextButton = styled.a`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    isHovering = e => {
        this.setState({ hovering: true })
    };
    notHovering = e => {
        this.setState({ hovering: false })
    };

    render() {
        const {
            contentData,
            lang,
        } = this.props;
        const {
            hovering
        } = this.state;
        return (
            <NextButton
                onMouseOver={this.isHovering}
                onMouseOut={this.notHovering}
                href={contentData.nextUrl}
            >
                <i class="fas fa-step-forward"></i>
                <NextThumb
                    contentData={contentData}
                    hovering={hovering}
                    lang={lang}
                />
            </NextButton>
        )
    }
}