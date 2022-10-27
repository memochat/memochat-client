import { DehydratedState } from '@tanstack/react-query';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type GetStaticPropsWithState<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = GetStaticProps<P & { dehydratedState?: DehydratedState }, Q, D>;

export type GetServerSidePropsWithState<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = GetServerSideProps<P & { dehydratedState?: DehydratedState }, Q, D>;
