import { parseUrls } from './';

test('링크가 없는 텍스트', () => {
  const text = '장 보기';

  const parsedText = parseUrls(text);

  expect(parsedText).toBe(text);
});

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

test('링크가 맨앞에 존재', () => {
  const text = 'www.naver.com, 구글: www.google.com';

  const parsedText = parseUrls(text);

  expect(parsedText).toEqual([
    { content: 'www.naver.com', type: 'link' },
    { content: ', 구글: ', type: 'text' },
    { content: 'www.google.com', type: 'link' },
  ]);
});

test('동일한 링크 두개가 있는 경우', () => {
  const text = '네이버1: www.naver.com, 네이버2: www.naver.com';

  const parsedText = parseUrls(text);

  expect(parsedText).toEqual([
    { content: '네이버1: ', type: 'text' },
    { content: 'www.naver.com', type: 'link' },
    { content: ', 네이버2: ', type: 'text' },
    { content: 'www.naver.com', type: 'link' },
  ]);
});

test('링크 사이에 줄바꿈 문자(\n)가 포함된 경우', () => {
  const text = 'www.naver.com\nhttps://www.google.com';

  const parsedText = parseUrls(text);

  expect(parsedText).toEqual([
    { content: 'www.naver.com', type: 'link' },
    { content: '\n', type: 'text' },
    { content: 'https://www.google.com', type: 'link' },
  ]);
});
