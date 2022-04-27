import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

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
  }
`;

const global = css`
  ${emotionReset}
  ${customReset}

  body {
    font-family: 'Spoqa Han Sans Neo', 'M PLUS 1', 'sans-serif';
  }
`;

const GlobalStyle = () => <Global styles={global} />;

export default GlobalStyle;
