import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';

import { LoadingProps } from './Loading.types';
import * as S from './Loading.styles';

const Loading = ({ initialLoadingState = false }: LoadingProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  useEffectOnce(() => {
    if (!router.isReady) {
      return;
    }

    const handleNprogressStart = () => {
      setIsLoading(true);
      nProgress.start();
    };

    const handleNprogressDone = () => {
      setIsLoading(false);
      nProgress.done();
    };

    router.events.on('routeChangeStart', handleNprogressStart);
    router.events.on('routeChangeError', handleNprogressDone);
    router.events.on('routeChangeComplete', handleNprogressDone);
    return () => {
      setIsLoading(false);
      router.events.off('routeChangeStart', handleNprogressStart);
      router.events.off('routeChangeError', handleNprogressDone);
      router.events.off('routeChangeComplete', handleNprogressDone);
    };
  });

  if (!isLoading) {
    return null;
  }

  return (
    <S.Wrapper>
      {/* <S.Dim open={isLoading} /> */}
      {/* <S.Lottie animationData={loadingLottie} /> */}
    </S.Wrapper>
  );
};

export default Loading;
