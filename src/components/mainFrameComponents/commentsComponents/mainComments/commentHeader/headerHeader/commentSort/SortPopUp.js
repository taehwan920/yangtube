import React from 'react';
import styled from 'styled-components';

const SortPopUpWrapper = styled.section`
    background: white;
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
    
    z-index: 26;
`;

const SortPopUpItemBox = styled.article`
    width: max-content;
    height: 48px;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: rgba(0, 0, 0, 0.1);
    }
`;

const SortPopUpItem = styled.span`
    font-size: 14px;
    color: black;
`;

export default class extends React.Component {
    sortPopular = () => {
        this.props.selectPop();

    };

    sortLatest = () => {
        this.props.selectLate();

    };

    render() {
        const {
            latest,
            popular,
        } = this.props;
        return (
            <SortPopUpWrapper>
                <SortPopUpItemBox
                    popular={popular}
                    onClick={this.sortPopular}
                >
                    <SortPopUpItem>
                        인기 댓글순
                    </SortPopUpItem>
                </SortPopUpItemBox>
                <SortPopUpItemBox
                    latest={latest}
                    onClick={this.sortLatest}
                >
                    <SortPopUpItem>
                        최근 날짜순
                    </SortPopUpItem>
                </SortPopUpItemBox>
            </SortPopUpWrapper>
        )
    }
}