import React from 'react';
import styled from 'styled-components';
import DescAndUploader from './titleAndDesc/DescAndUploader';
import TitleAndInfo from './titleAndDesc/TitleAndInfo';

const TitleAndDesc = styled.section`
    background-color: inherit;
    width: 100%;
    height: calc(${props => props.realHeight || '0'}px + 292px);
`;

const TitleWrapper = styled.article`
    width: 100%;
    height: 93px;
    padding-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
    width: 100%;
    height: 24px;
    font-size: 18px;
`;

const titleItem = '제목';

export default class extends React.Component {
    state = {
        showMore: false,
        realHeight: null
    };

    showMoreFunc = () => {
        if (this.state.realHeight === null) {
            const realHeight = document.querySelector('.real-height').offsetHeight;
            const basicHeight = 57;
            this.setState({
                showMore: !this.state.showMore,
                realHeight: realHeight - basicHeight
            })
        } else {
            this.setState({
                showMore: !this.state.showMore,
                realHeight: null
            })
        }
    };

    render() {
        const { showMore, realHeight } = this.state;
        return (
            <TitleAndDesc realHeight={realHeight}>
                <TitleWrapper>
                    <Title>{titleItem}</Title>
                    <TitleAndInfo></TitleAndInfo>
                </TitleWrapper>
                <DescAndUploader
                    showMoreFunc={this.showMoreFunc}
                    showMore={showMore}
                    realHeight={realHeight}
                ></DescAndUploader>
            </TitleAndDesc>
        )
    }
}