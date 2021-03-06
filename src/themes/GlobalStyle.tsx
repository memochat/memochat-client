import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

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
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
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
`;

const global = css`
  ${emotionReset}
  ${customReset}

  html {
    font-size: 13px;

    font-family: 'Spoqa Han Sans Neo', 'M PLUS 1', 'sans-serif';
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
