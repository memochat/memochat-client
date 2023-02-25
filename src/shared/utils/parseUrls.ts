export const urlRegex =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

type ParsedBlock = { type: 'text' | 'link'; content: string };

/**
 url을 포함한 텍스트를 text와 link를 구분하는 배열 형태로 파싱하는 함수
 - input: 네이버: www.naver.com , 구글: www.google.com
 - output:
 링크가 없는 경우: string 타입 반환
 링크가 포함된 경우: 다음과 같은 형태 반환
 [
  {type:'text', content:'네이버: '},
  {type:'link', content:'www.naver.com'},
  {type:'text', content:' , 구글: '},
  {type:'link', content:'www.google.com'}
 ] 
 */
export const parseUrls = (text: string): ParsedBlock[] | string => {
  const urls = text.match(urlRegex);

  if (!urls?.length) {
    return text;
  }

  let textIndex = 0;
  const parsedArr: ParsedBlock[] = [];
  urls.map((url) => {
    const leftoverText = text.slice(textIndex);
    const urlStartIndex = textIndex + leftoverText.search(url);
    const urlEndIndex = urlStartIndex + url.length - 1;

    if (textIndex < urlStartIndex) {
      parsedArr.push({
        type: 'text',
        content: text.slice(textIndex, urlStartIndex),
      });
    }

    parsedArr.push({
      type: 'link',
      content: text.slice(urlStartIndex, urlEndIndex + 1),
    });

    textIndex = urlEndIndex + 1;
  });

  if (textIndex < text.length - 1) {
    parsedArr.push({
      type: 'text',
      content: text.slice(textIndex),
    });
  }

  return parsedArr;
};
