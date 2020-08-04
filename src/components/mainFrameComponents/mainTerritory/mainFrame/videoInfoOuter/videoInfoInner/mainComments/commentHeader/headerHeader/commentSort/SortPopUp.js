import React from 'react';
import styled from 'styled-components';

const SortPopUpWrapper = styled.section`
    background: ${props => props.themeColor.main.BG};
    width: max-content;
    height: max-content;
    padding: 8px 0px;
    position: absolute;
    top: 32px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
    
    z-index: 45;
`;

const SortPopUpItemBox = styled.article`
    background: ${props => props.isSelected ? props.themeColor.effectBG : 'transparent'};
    width: max-content;
    height: 48px;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        background: ${props => props.themeColor.effectBG};
    }
`;

const SortPopUpItem = styled.span`
    font-size: 14px;
    color: ${props => props.themeColor.normalFont};
`;

export default class extends React.Component {
    render() {
        const {
            byLatest,
            byPopular,
            pickLatest,
            pickPopular,
            themeColor,
        } = this.props;
        return (
            <SortPopUpWrapper
                themeColor={themeColor}
            >
                <SortPopUpItemBox
                    isSelected={byPopular}
                    onClick={pickPopular}
                    themeColor={themeColor}
                >
                    <SortPopUpItem
                        themeColor={themeColor}
                    >
                        인기 댓글순
                    </SortPopUpItem>
                </SortPopUpItemBox>
                <SortPopUpItemBox
                    isSelected={byLatest}
                    onClick={pickLatest}
                    themeColor={themeColor}
                >
                    <SortPopUpItem
                        themeColor={themeColor}
                    >
                        최근 날짜순
                    </SortPopUpItem>
                </SortPopUpItemBox>
            </SortPopUpWrapper>
        )
    }
}