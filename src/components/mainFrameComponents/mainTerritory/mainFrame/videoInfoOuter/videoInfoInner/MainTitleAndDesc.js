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
    border-bottom: 1px solid ${props => props.themeColor.main.border};
`;

const Title = styled.div`
    width: 100%;
    height: 24px;
    color: ${props => props.themeColor.normalFont};
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
            }
            return [num, '']
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
            contentData,
            lang,
            langState,
            themeColor,
        } = this.props;
        const {
            showMore,
            realHeight,
        } = this.state;
        return (
            <TitleAndDesc
                realHeight={realHeight}
            >
                <TitleWrapper
                    themeColor={themeColor}
                >
                    <Title
                        themeColor={themeColor}
                    >
                        {contentData.title}
                    </Title>
                    <TitleAndInfo
                        contentData={contentData}
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                    />
                </TitleWrapper>
                <DescAndUploader
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    realHeight={realHeight}
                    showMoreFunc={this.showMoreFunc}
                    showMore={showMore}
                    themeColor={themeColor}
                />
            </TitleAndDesc>
        )
    }
}