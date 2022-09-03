import { css } from '@emotion/react';

/** 글자수 말줄임 표시 (지정된 width가 있어야 정상적으로 동작) */
export const ellipsis = (line = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;

  ${line <= 1
    ? `
    white-space: nowrap;
    `
    : `
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: ${line}; 
    -webkit-box-orient: vertical;
    `}
`;
