import React from 'react';
import styled from 'styled-components';


const SearchWrapper = styled.section`
    width: 35%;
    height: 30px;
    display: flex;
    @media (max-width: 767px) {
        display: none;
    }
`;

const SearchBoxAndIcon = styled.div`
    width: 90%;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 0.5px solid rgba(0, 0, 0, 0.15);
    border-right: 0.25px solid rgba(0, 0, 0, 0.15);
`;

const KbdIcon = styled.span`
    position: absolute;
    right: 12px;
    font-size: 18px;
    line-height: 30px;
    opacity: 0.6;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

const SearchBtn = styled.button`
    width: 65px;
    height: 30px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    border: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export default class extends React.Component {
    render() {
        return (
            <SearchWrapper>
                <SearchBoxAndIcon>
                    <SearchInput id="searchInput" placeholder="  검색" type="text" />
                    <KbdIcon onClick={this.props.onClick}>
                        <i class="fas fa-keyboard"></i>
                    </KbdIcon>
                </SearchBoxAndIcon>
                <SearchBtn>
                    <i class="fas fa-search"></i>
                </SearchBtn>

            </SearchWrapper>
        )
    }
}