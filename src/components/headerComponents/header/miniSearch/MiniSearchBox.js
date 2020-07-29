import React from 'react';
import styled from 'styled-components';


const SearchWrapper = styled.section`
    width: calc(100% - 48px);
    height: 30px;
    margin-right: 24px;
    display: flex;
    @media (min-width: 768px) {
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
    border: 0.5px solid rgba(0, 0, 0, 0.15);
    border-right: 0.25px solid rgba(0, 0, 0, 0.15);
    position: relative;
`;

const InputBox = styled.div`
    width: 100%;
    height: 100%;
    padding-right: 34px;
`;

const SearchInput = styled.input`
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
    font-size: 18px;
    top: 4px;
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
    componentDidMount() {
        window.addEventListener('resize', this.disappearIfTooWide);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.disappearIfTooWide);
    }

    disappearIfTooWide = e => {
        if (e.target.innerWidth < 768) { return; }
        this.props.offMiniSearch();
    }

    render() {
        const { toggleVkbd } = this.props;
        return (
            <SearchWrapper>
                <SearchBoxAndIcon>
                    <InputContainer>
                        <InputBox>
                            <SearchInput
                                id="searchInput"
                                placeholder="검색"
                                type="text"
                                autoComplete="off"
                            />
                        </InputBox>
                        <KbdIcon onClick={toggleVkbd}>
                            <i class="fas fa-keyboard"></i>
                        </KbdIcon>
                    </InputContainer>
                </SearchBoxAndIcon>
                <SearchBtn>
                    <i class="fas fa-search"></i>
                </SearchBtn>
            </SearchWrapper>
        )
    }
}