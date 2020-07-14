import React from 'react';
import styled from 'styled-components';

const VideoNavPCWrapper = styled.nav`
    background-color: skyblue;
    width: 402px;
    height: 100rem;
    padding-top: 24px;
    padding-right: 24px;
    top: 56px;
    position: relative;
    display:inline-block;
    z-index: 1;
`;


export default class extends React.Component {
    render() {
        return (
            <VideoNavPCWrapper>
                <div>
                    <div>
                        <span>다음 동영상</span>
                        <div>
                            <span>자동재생</span>
                            <div>
                                <div>스위치 뒷 바</div>
                                <div>스위치 둥근 것</div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </VideoNavPCWrapper>
        )
    }
}