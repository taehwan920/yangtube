import React from 'react';
import styled from 'styled-components';
import { parseNum, parseTime } from '../../../../../../../Mixin';

const RecommendItemBox = styled.a`
    width: ${props => (props.frameWidth - 100) / props.columns}px;
    height: ${props => (props.frameWidth - 100) / props.columns / 16 * 9}px;
    max-width: 381px;
    max-height: ${381 / 16 * 9}px;
    position: relative;
    cursor: pointer;
`;

const RecommendThumbnail = styled.img`
    background: skyblue;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const HoverPart = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    opacity: ${props => props.hovering ? 1 : 0};
    transition: opacity 0.2s ease-out;
    z-index: 4;
`;

const GradientPart = styled.div`
    background: linear-gradient(
        to top, 
        transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)
        );
    width: 100%;
    height: 50.625%;
    position: absolute;
    top: 0;
`;

const RecommendInfoBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    
`;

const TitleTxt = styled.div`
    width: 100%;
    padding-right: 16px;
    color: white;
    font-size: 13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;
const InfoBox = styled.div`
    width: 100%;
`;

const UploaderViews = styled.span`
    color: white;
    font-size: 12px;
`;

const VidDurationBox = styled.div`
    background: rgba(0, 0, 0, 0.75);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4px;
    right: 4px;
`;

const VidDuration = styled.span`
    font-size: 12px;
    font-weight: 500; 
    letter-spacing: 0.5px;
    color: white;
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    mouseHovering = () => {
        this.setState({ hovering: true });
    };

    mouseGoOut = () => {
        this.setState({ hovering: false });
    };

    render() {
        const {
            columns,
            frameWidth,
            lang,
            langState,
            video,
        } = this.props;
        const {
            hovering
        } = this.state;
        const {
            title,
            pageUrl,
            thumbnailUrl,
            uploader,
            views,
            duration,
        } = video;
        const parsedViews = parseNum(views, langState);
        const viewsNum = parsedViews[0];
        const viewsMeasure = parsedViews[1];
        return (
            <RecommendItemBox
                href={pageUrl}
                frameWidth={frameWidth}
                columns={columns}
                onMouseOver={this.mouseHovering}
                onMouseLeave={this.mouseGoOut}
            >
                <HoverPart
                    hovering={hovering}
                >
                    <GradientPart>
                        <RecommendInfoBox>
                            <TitleTxt>
                                {title}
                            </TitleTxt>
                            <InfoBox>
                                <UploaderViews>
                                    {uploader} · {lang.videoNav.views}{viewsNum}{viewsMeasure}{lang.videoNav.viewMeasure}
                                </UploaderViews>
                            </InfoBox>
                        </RecommendInfoBox>
                    </GradientPart>
                    <VidDurationBox>
                        <VidDuration>
                            {parseTime(duration)}
                        </VidDuration>
                    </VidDurationBox>
                </HoverPart>
                <RecommendThumbnail
                    src={thumbnailUrl}
                />
            </RecommendItemBox>
        )
    }
};