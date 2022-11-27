import Lottie from 'lottie-web';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect, useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';

import * as S from './Loading.styles';
import { LoadingProps } from './Loading.types';

// import loadingLottie from '@src/assets/lotti/loading.json';

const Loading = ({ initialLoadingState = false }: LoadingProps) => {
  const router = useRouter();
  // const lottieRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  // useEffect(() => {
  //   if (lottieRef === null || !isLoading) {
  //     return;
  //   }
  //   Lottie.loadAnimation({
  //     container: lottieRef.current as HTMLDivElement,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: loadingLottie,
  //     path: '',
  //   });
  // }, [isLoading]);

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
      {/* <S.Lottie ref={lottieRef} /> */}
    </S.Wrapper>
  );
};

export default Loading;
