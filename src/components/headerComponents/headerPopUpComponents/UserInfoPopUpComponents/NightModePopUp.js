import React from 'react';
import styled, { css } from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp';
import { UserInfoLeftArrow, ToggleSwitch } from '../../../Mixin';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const NightModeArticle = styled.article`
    padding: 8px 16px 8px 16px;
    font-size: 14px;
    line-height: 20px;
    ${UserInfoCommonSetUp}
`;

const NightModeToggleArticle = styled(NightModeArticle)`
    display: flex;
    align-item: center;
`;

const NightModeToggleText = styled.div`
    width: 204px;
    color: rgba(0, 0, 0, 0.7);
`;

const NightHeaderItems = ['어두운 테마']

const NightModeItems = [
    ['어두운 테마는 페이지의 밝은 표면을 어둡게 해 야간에 적합한 시청 환경을 제공합니다. 어두운 테마를 사용해 보세요.'],
    ['어두운 테마 설정은 이 브라우저에만 적용 됩니다.'],
    ['어두운 테마']
]

export default class extends React.Component {
    buildItem = item => {
        if (NightModeItems.indexOf(item) !== NightModeItems.length - 1) {
            return (
                <NightModeArticle>
                    {item}
                </NightModeArticle>
            )
        }
    }
    render() {
        const { toggleMode, stateType } = this.props;
        return (
            <React.Fragment>
                <SubPopUpHeaderWrapper>
                    <UserInfoLeftArrow toggleMode={toggleMode} stateType={stateType}></UserInfoLeftArrow>
                    <SubPopUpString>{NightHeaderItems[0]}</SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection>
                    {NightModeItems.map(item => this.buildItem(item))}
                    <NightModeToggleArticle>
                        <NightModeToggleText>
                            {NightModeItems[NightModeItems.length - 1]}
                        </NightModeToggleText>
                        <ToggleSwitch></ToggleSwitch>
                    </NightModeToggleArticle>
                </PopUpSection>
            </React.Fragment>
        )
    }
}