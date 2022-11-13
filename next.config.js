const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains:['memochat-develop.s3.ap-northeast-2.amazonaws.com']
  },
  /**@param {import("webpack").Configuration} config */
  webpack(config) {
    /**
     * @note https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js/70961634#comment125790685_70961634
     * url-loader가 없는 경우
     * export { ReactComponent as SomeSvg } from './actual.svg -> 사용불가
     * export { default as SomeSvg } from './actual.svg -> 사용가능 (이렇게 사용한 경우 스토리북에서 오류)
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rooms',
        permanent: true,
      },
    ]
  },
};

const intercept = require('intercept-stdout');

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

module.exports = withBundleAnalyzer(nextConfig);
