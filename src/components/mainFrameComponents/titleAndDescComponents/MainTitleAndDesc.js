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

export default class extends React.Component {
    state = {
        showMore: false,
        realHeight: null
    };

    parseDecimal = (num, divider) => {
        let parsed;
        num / divider / 10 > 100
            ? parsed = parseInt(num / divider) / 10
            : parsed = parseInt(num / divider);
        return parsed;
    };

    parseNum = (num, lang) => {
        if (lang === 'kr') {
            if (num / 10 ** 8 > 1) {
                return [this.parseDecimal(num, 10 ** 8), '억'];
            } else if (num / 10 ** 4 > 1) {
                return [this.parseDecimal(num, 10 ** 4), '만'];
            } else if (num / 10 ** 3 > 1) {
                return [this.parseDecimal(num, 10 ** 3), '천'];
            } else {
                return num
            }
        }
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
        const {
            contentData
        } = this.props;
        const {
            showMore,
            realHeight,
        } = this.state;
        return (
            <TitleAndDesc realHeight={realHeight}>
                <TitleWrapper>
                    <Title>
                        {contentData.title}
                    </Title>
                    <TitleAndInfo
                        parseNum={this.parseNum}
                        contentData={contentData}
                    />
                </TitleWrapper>
                <DescAndUploader
                    parseNum={this.parseNum}
                    showMoreFunc={this.showMoreFunc}
                    showMore={showMore}
                    realHeight={realHeight}
                    contentData={contentData}
                />
            </TitleAndDesc>
        )
    }
}