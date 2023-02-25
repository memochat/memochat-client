import { parseUrls } from './';

test('1개 링크 파싱', () => {
  const text = '네이버: www.naver.com';

  const parsedText = parseUrls(text);

  expect(parsedText).toEqual([
    { content: '네이버: ', type: 'text' },
    { content: 'www.naver.com', type: 'link' },
  ]);
});

test('n개 이상 링크 파싱', () => {
  const text = '네이버: www.naver.com, 구글: www.google.com';

  const parsedText = parseUrls(text);

  expect(parsedText).toEqual([
    { content: '네이버: ', type: 'text' },
    { content: 'www.naver.com', type: 'link' },
    { content: ', 구글: ', type: 'text' },
    { content: 'www.google.com', type: 'link' },
  ]);
});

test('1개 텍스트 파싱', () => {
  const text = '장 보기';

  const parsedText = parseUrls(text);

  expect(parsedText).toBe(text);
});
