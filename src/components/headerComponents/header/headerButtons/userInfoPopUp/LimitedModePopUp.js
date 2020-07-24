import React from 'react';
import styled, { css } from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp';
import { UserInfoLeftArrow, ToggleSwitch } from '../../../../Mixin';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const LimitedModeArticle = styled.article`
    padding: 8px 16px 8px 16px;
    font-size: 14px;
    line-height: 20px;
    ${UserInfoCommonSetUp}
`;

const LimitedModeToggleArticle = styled(LimitedModeArticle)`
    display: flex;
    align-item: center;
`;

const LimitedModeToggleText = styled.div`
    width: 204px;
    color: rgba(0, 0, 0, 0.7);
`;

const LimitedHeaderItem = ['제한 모드'];

const LimitedModeItem = [
    ['이 모드를 사용하면 미성년자에게 부적합할 수 있는 동영상을 숨길 수 있습니다. 단, 필터링이 완벽할 수는 없다는 점에 유의하세요.'],
    ['이 설정은 이 브라우저에만 적용됩니다.'],
    ['제한 모드 활성화']
];

export default class extends React.Component {
    buildItem = item => {
        if (LimitedModeItem.indexOf(item) !== LimitedModeItem.length - 1) {
            return (
                <LimitedModeArticle>
                    {item}
                </LimitedModeArticle>
            )
        }
    }
    render() {
        const { toggleMode, stateType } = this.props;
        return (
            <React.Fragment>
                <SubPopUpHeaderWrapper>
                    <UserInfoLeftArrow toggleMode={toggleMode} stateType={stateType}></UserInfoLeftArrow>
                    <SubPopUpString>{LimitedHeaderItem[0]}</SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection>
                    {LimitedModeItem.map(item => this.buildItem(item))}
                    <LimitedModeToggleArticle>
                        <LimitedModeToggleText>
                            {LimitedModeItem[LimitedModeItem.length - 1]}
                        </LimitedModeToggleText>
                        <ToggleSwitch></ToggleSwitch>
                    </LimitedModeToggleArticle>
                </PopUpSection>
            </React.Fragment>
        )
    }
}