import { NextPage } from 'next';
import Image from 'next/image';

import * as S from './settings.styles';

import settingImg from '@public/images/settings.png';
import { Header } from '@src/shared/components';
import SettingDetailMenu from '@src/features/settings/components/SettingDetailMenu';
import useConfirm from '@src/shared/hooks/useConfirm';

const Settings: NextPage = () => {
  const { confirm } = useConfirm();
  const handleLogoutBtnClick = async () => {
    const result = await confirm({
      headerTitle: '알림',
      title: '로그아웃 하시겠습니까?',
      description: '메모 내용 백업이 일시 정지됩니다.',
    });
    if (!result) {
      return;
    }
    alert('로그아웃');
  };

  return (
    <S.Wrapper>
      <Header title="설정" titleAlign="center" />
      <Image src={settingImg} alt="setting" />
      <S.DetailMenuList>
        <SettingDetailMenu iconName="Avatar" />
        <SettingDetailMenu iconName="Chat" />
        <SettingDetailMenu iconName="Lang" />
        <S.TextButton onClick={handleLogoutBtnClick} color="red1">
          로그아웃
        </S.TextButton>
      </S.DetailMenuList>
      <S.Divider />
      <S.Box>
        <S.TextButton color="gray3">이용약관</S.TextButton>
        <S.TextButton color="gray3">버전</S.TextButton>
      </S.Box>
    </S.Wrapper>
  );
};

export default Settings;
