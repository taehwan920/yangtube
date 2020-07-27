import React from 'react';
import styled from 'styled-components';
import ConfigAutoPlay from './configPopUp/ConfigAutoPlay';
import ConfigPlayBack from './configPopUp/ConfigPlayBack';

const ConfigPopUpWrapper = styled.section`
    background: #252525;
    width: 251px;
    height: max-content;
    padding: 8px 0px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    right: 0px;
    display: flex;
    flex-direction: column;
    z-index: 71;
`;

export const ConfigItem = styled.article`
    width: 100%;
    height: 40px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: white;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const ItemLeftBox = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ItemRightBox = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items:center;
`;

export default class extends React.Component {
    render() {
        return (
            <ConfigPopUpWrapper>
                <ConfigAutoPlay />
                <ConfigPlayBack />
            </ConfigPopUpWrapper>
        )
    }
}