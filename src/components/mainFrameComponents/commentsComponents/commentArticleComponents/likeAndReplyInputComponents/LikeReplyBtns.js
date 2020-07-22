import React from 'react';
import styled from 'styled-components';

const LikeAndReplyWrapper = styled.div`
    width: 100%;
    height: 33px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const LikeIcon = styled.div`
    width: 32px;
    height: 32px;
    padding: 8px;
    font-size: 16px;
    line-height: 0px;
    color: rgba(0, 0, 0, 0.4);
`;

const DislikeIcon = styled(LikeIcon)`
    line-height: 25px;
`;

const LikeNum = styled.div`
    min-width: 7.5px;
    height: 18px;
    margin-right: 8px;
    line-height: 22px;
    font-size: 12px;
`;

const ReplyBtn = styled.div`
    min-width: 67px;
    width: max-content;
    height: 33px;
    padding: 8px 16px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
`;

export default class extends React.Component {
    render() {
        return (
            <LikeAndReplyWrapper>
                <LikeIcon>
                    <i class="fas fa-thumbs-up"></i>
                </LikeIcon>
                <LikeNum>
                    3.6억
                </LikeNum>
                <DislikeIcon>
                    <i class="fas fa-thumbs-down"></i>
                </DislikeIcon>
                <ReplyBtn>
                    답글
                </ReplyBtn>
            </LikeAndReplyWrapper>
        )
    }
}