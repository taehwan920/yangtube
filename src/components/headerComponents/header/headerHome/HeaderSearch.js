import React from 'react';
import styled from 'styled-components';


const SearchWrapper = styled.section`
    width: 40%;
    height: 30px;
    display: flex;
    @media (max-width: 767px) {
        display: none;
    }
`;

const SearchBoxAndIcon = styled.div`
    width: calc(100% - 65px);
    height: 30px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2px 6px;
    position: relative;

    ${props => {
        if (props.theaterMode || props.nightMode) {
            return `
                border: 0.5px solid ${props.themeColor.nightMode.header.searchBorder};
                border-right: 0.25px solid ${props.themeColor.nightMode.header.searchBorder};
                background: ${props.themeColor.nightMode.header.searchBoxBG};
            `;
        } else {
            return `
                border: 0.5px solid ${props.themeColor.dayMode.header.searchBorder};
                border-right: 0.25px solid ${props.themeColor.dayMode.header.searchBorder};
                background: ${props.themeColor.dayMode.header.searchBoxBG};
            `;
        }
    }};
`;

const InputBox = styled.div`
    background: inherit;
    width: 100%;
    height: 100%;
    padding-right: 34px;
`;

const SearchInput = styled.input`
    background: inherit;
    width: 100%;
    height: 24px;
    border: none;
    font-size: 16px;
    
    &:focus {
        outline: none;
    }
`;

const KbdIcon = styled.span`
    position: absolute;
    right: 12px;
    top: 4px;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.grayFont;
        } else {
            return props.themeColor.dayMode.grayFont;
        }
    }};
    font-size: 18px;
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
    cursor: pointer;
    ${props => {
        if (props.theaterMode || props.nightMode) {
            return `
                color: ${props.themeColor.nightMode.grayFont};
                border: 0.5px solid ${props.themeColor.nightMode.header.searchBorder};
                background: ${props.themeColor.nightMode.header.searchBtnBG};
            `;
        } else {
            return `
                color: ${props.themeColor.dayMode.grayFont};
                border: 0.5px solid ${props.themeColor.dayMode.header.searchBorder};
                background: ${props.themeColor.dayMode.header.searchBtnBG};
            `;
        }
    }};
`;

export default class extends React.Component {
    render() {
        const {
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        return (
            <SearchWrapper>
                <SearchBoxAndIcon>
                    <InputContainer
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    >
                        <InputBox>
                            <SearchInput
                                nightMode={nightMode}
                                theaterMode={theaterMode}
                                themeColor={themeColor}
                                id="searchInput"
                                placeholder="검색"
                                type="text"
                                autoComplete="off"
                            />
                        </InputBox>
                        <KbdIcon
                            onClick={this.props.toggleVkbd}
                            nightMode={nightMode}
                            theaterMode={theaterMode}
                            themeColor={themeColor}
                        >
                            <i class="fas fa-keyboard"></i>
                        </KbdIcon>
                    </InputContainer>
                </SearchBoxAndIcon>
                <SearchBtn
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    themeColor={themeColor}
                >
                    <i class="fas fa-search"></i>
                </SearchBtn>
            </SearchWrapper>
        )
    }
}