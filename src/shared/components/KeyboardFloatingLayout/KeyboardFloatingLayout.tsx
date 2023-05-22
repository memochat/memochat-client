import { useEffect } from 'react';

import useVisualViewportDimension from '@src/shared/hooks/useVisualViewportDimension';
import { useOS } from '@src/shared/hooks/useOS';

import { KeyboardFloatingLayoutProps } from './KeyboardFloatingLayout.types';
import * as S from './KeyboardFloatingLayout.styles';

// TODO: 추후 살펴보고 사용안하면 제거
const KeyboardFloatingLayout = ({ children }: KeyboardFloatingLayoutProps) => {
  const os = useOS();

  const { height: visualViewportHeight } = useVisualViewportDimension(os === 'ios');

  useEffect(() => {
    if (os !== 'ios') return;
    // 키보드 변경시 입력창이 가려지는 문제 수정
    if (visualViewportHeight < window.outerHeight) {
      const scrollHeight = window.document.scrollingElement.scrollHeight;
      const scrollTop = scrollHeight - window.visualViewport.height;

      window.scrollTo({ top: scrollTop });
    }
  }, [os, visualViewportHeight]);

  return <S.Wrapper>{children}</S.Wrapper>;
};

export default KeyboardFloatingLayout;
