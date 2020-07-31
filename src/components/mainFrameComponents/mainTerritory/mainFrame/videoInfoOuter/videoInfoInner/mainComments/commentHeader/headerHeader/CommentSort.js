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

const SortMiniPopUp = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 10px;
    border-radius: 2px;
    position: absolute;
    top: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s ease-out;
    opacity: ${props => props.miniActive ? 1 : 0};
    z-index: 30;
`;

const SortMiniPopUpTxt = styled.span`
    font-size: 13px;
    color: white;
`;

export default class extends React.Component {
    state = {
        popUpClicked: false,
        miniActive: false,
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

    pickPopular = e => {
        e.stopPropagation();
        this.setState({ popUpClicked: false });
        this.props.selectPop();
    };

    pickLatest = e => {
        e.stopPropagation();
        this.setState({ popUpClicked: false });
        this.props.selectLate();
    };

    miniActivate = () => {
        this.setState({ miniActive: true });
    };
    miniDeactivate = () => {
        this.setState({ miniActive: false });
    };

    render() {
        const {
            miniActive,
            popUpClicked,
        } = this.state;
        const {
            byLatest,
            byPopular,
        } = this.props;
        return (
            <CommentSortBox
                ref={this.sortRef}
                onClick={this.togglePopUp}
                onMouseEnter={this.miniActivate}
                onMouseLeave={this.miniDeactivate}
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
                        byLatest={byLatest}
                        byPopular={byPopular}
                        pickPopular={this.pickPopular}
                        pickLatest={this.pickLatest}
                        togglePopUp={this.togglePopUp}
                        popUpClicked={popUpClicked}
                    />
                    : null}
                <SortMiniPopUp
                    miniActive={miniActive}
                >
                    <SortMiniPopUpTxt>
                        댓글 정렬
                    </SortMiniPopUpTxt>
                </SortMiniPopUp>
            </CommentSortBox>
        )
    }
};
