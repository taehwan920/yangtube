import React from 'react';
import styled from 'styled-components';
import { CommentClickEffect } from '../../CommentHeader';
import SortPopUp from './commentSort/SortPopUp';

const CommentSortBox = styled.div`
    width: max-content;
    height: 100%;
    padding: 0px 4px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
    display: flex;
`;

const CommentSortIcon = styled.span`
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
`;

const CommentSortText = styled.span`
    width: auto;
    height: auto;
    font-size: 14px;
`;

export default class extends React.Component {
    state = {
        popUpClicked: false,
        popular: false,
        latest: false
    };

    sortRef = React.createRef();

    componentDidMount() {
        document.addEventListener('click', this.clickOutside);
    };

    componentWillUnmount() {
        document.removeEventListener('click', this.clickOutside);
    };

    clickOutside = e => {
        if (this.sortRef && !this.sortRef.current.contains(e.target)) {
            this.setState({ popUpClicked: false });
        }
    };

    togglePopUp = () => {
        this.setState({ popUpClicked: !this.state.popUpClicked });
    };

    selectPop = () => {
        this.setState({
            latest: false,
            popular: true,
            popUpClicked: false,
        });
    };

    selectLate = () => {
        this.setState({
            latest: true,
            popular: false,
            popUpClicked: false,
        });
    };

    render() {
        const {
            latest,
            popUpClicked,
            popular,
        } = this.state;
        return (
            <CommentSortBox
                ref={this.sortRef}
                onClick={this.togglePopUp}
            >
                <CommentSortIcon>
                    <i class="fas fa-sort-amount-down"></i>
                </CommentSortIcon>
                <CommentSortText>
                    정렬 기준
                <CommentClickEffect />
                </CommentSortText>
                {popUpClicked
                    ?
                    <SortPopUp
                        latest={latest}
                        selectPop={this.selectPop}
                        selectLate={this.selectLate}
                        togglePopUp={this.togglePopUp}
                        popUpClicked={popUpClicked}
                        popular={popular}
                    />
                    : null}
            </CommentSortBox>
        )
    }
};