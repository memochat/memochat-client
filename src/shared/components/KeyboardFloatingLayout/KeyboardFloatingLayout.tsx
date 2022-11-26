import { useEffect } from 'react';

import { KeyboardFloatingLayoutProps } from './KeyboardFloatingLayout.types';
import * as S from './KeyboardFloatingLayout.styles';

import useVisualViewportDimension from '@src/shared/hooks/useVisualViewportDimension';
import { getOS } from '@src/shared/utils/getOS';

const KeyboardFloatingLayout = ({ children }: KeyboardFloatingLayoutProps) => {
  const os = getOS();

  const { height: visualViewportHeight } = useVisualViewportDimension(os === 'ios');

  useEffect(() => {
    if (os === 'ios') {
      // 키보드 변경시 입력창이 가려지는 문제 수정
      if (visualViewportHeight < window.outerHeight) {
        const scrollHeight = window.document.scrollingElement.scrollHeight;
        const scrollTop = scrollHeight - window.visualViewport.height;

        window.scrollTo({ top: scrollTop });
      }
    }
  }, [os, visualViewportHeight]);

  return <S.Wrapper>{children}</S.Wrapper>;
};

export default KeyboardFloatingLayout;
