import React from 'react';
import styled from 'styled-components';

const GradientPart = styled.div`
    background: linear-gradient(
        to top, 
        transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)
        );
    width: 100%;
    height: 50.625%;
    padding-bottom: 49px;
    position: absolute;
    top: 0;
`;



const GradientTitle = styled.div`
    width: max-content;
    height: max-content;
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    align-items: center;
`;

const TitleTxt = styled.span`
    color: white;
    font-size: 26px;
`;
export default class extends React.Component {
    render() {
        const { contentData } = this.props;
        return (
            <GradientPart>
                <GradientTitle>
                    <TitleTxt>
                        {contentData.title}
                    </TitleTxt>
                </GradientTitle>
            </GradientPart>
        )
    }
};