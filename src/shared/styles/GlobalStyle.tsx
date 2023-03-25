import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { lightColorTheme } from './themes/color';

/** https://www.joshwcomeau.com/css/custom-css-reset/ */
const customReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    position: relative;
    width: 100%;
    overflow-y: auto;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    > #make-scrollable {
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: calc(100% + 1px); // height를 100%보다 1px높게 잡아 실제로 scroll이 되도록 만듭니다.
    }
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  button {
    border: none;
    background-color: transparent;
  }

  textarea,
  input {
    border: none;
    resize: none;
    outline: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  a,
  a:link:hover,
  a:-webkit-any-link {
    text-decoration: none;
  }
`;

const global = css`
  ${emotionReset}
  ${customReset}

  /* react-toastify 커스텀 색상 사용 */
  :root {
    --toastify-color-info: ${lightColorTheme.blue1};
    --toastify-color-success: ${lightColorTheme.green1};
    --toastify-color-warning: ${lightColorTheme.yellow1};
    --toastify-color-error: ${lightColorTheme.red1};
  }

  html {
    font-size: 13px;

    font-family: 'Spoqa Han Sans Neo', 'M PLUS 1', 'sans-serif';
  }

  a,
  a:link:hover,
  a:-webkit-any-link {
    text-decoration: none;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background-color: ${lightColorTheme.purple1};
    height: 3px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2000;
  }

  /** 작은 단말 대응 (iPhone SE, Galaxy Fold ) */
  @media (max-width: 360px) {
    html {
      font-size: 11px;
    }
  }
`;

const GlobalStyle = () => <Global styles={global} />;

export default GlobalStyle;
