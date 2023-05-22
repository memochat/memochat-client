import Image from 'next/image';

import { ImageSettings } from '@public/static/images';
import AuthGuard from '@src/features/auth/components/AuthGuard';
import SettingDetailMenu from '@src/features/settings/components/SettingDetailMenu';
import { Header } from '@src/shared/components';
import useConfirm from '@src/shared/hooks/useConfirm';
import { NextPageWithLayout } from '@src/shared/types/next';
import { toast } from '@src/shared/utils/toast';
import useAuth from '@src/features/auth/hooks/useAuth';

import * as S from './settings.styles';

const Settings: NextPageWithLayout = () => {
  const { confirm } = useConfirm();
  const { logout } = useAuth();

  const handleLogoutBtnClick = async () => {
    const result = await confirm({
      headerTitle: '알림',
      title: '로그아웃 하시겠습니까?',
      description: '메모 내용 백업이 일시 정지됩니다.',
      variant: 'danger',
    });
    if (!result) {
      return;
    }
    logout();
    toast.success('로그아웃 되었습니다.');
  };

  return (
    <>
      <Header title="설정" titleAlign="center" />
      <S.Wrapper>
        <Image src={ImageSettings} alt="setting" width={265} height={168} />
        <S.DetailMenuList>
          <SettingDetailMenu
            href="/settings/account"
            iconName="Avatar"
            title="계정 및 프로필 관리"
          />
          <SettingDetailMenu href="/inquiry" iconName="Chat" title="문의하기" />
          {/* <SettingDetailMenu href="" iconName="Lang" title="언어변경" /> */}
          <S.TextButton onClick={handleLogoutBtnClick} color="red1">
            로그아웃
          </S.TextButton>
        </S.DetailMenuList>
        <S.Divider />
        <S.Box>
          {/* TODO: 링크 걸기 */}
          <S.TextButton color="gray3">이용약관</S.TextButton>
          <S.TextButton color="gray3">버전</S.TextButton>
        </S.Box>
      </S.Wrapper>
    </>
  );
};

Settings.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default Settings;
