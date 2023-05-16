import { ReactNode } from 'react';

import { parseUrls } from '@src/shared/utils/parseUrls';

export const highlightenLink = (text: string): ReactNode => {
  const result = parseUrls(text);

  return typeof result === 'string'
    ? result
    : result.reduce((acc, { type, content }) => {
        return (
          <>
            {acc}
            {type === 'link' ? (
              <a href={content} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              content
            )}
          </>
        );
      }, <></>);
};
