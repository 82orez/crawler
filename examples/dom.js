const axios = require('axios');
const cheerio = require('cheerio');

const main = async () => {
  const resp = await axios.get('https://yjiq150.github.io/coronaboard-crawling-sample/dom');

  const $ = cheerio.load(resp.data);

  // 클래스 slide 하위(후손)의 p 태그를 가진 요소들을 찾음.
  const elements = $('.slide p');

  // * 일반적인 JS 문법과는 차이가 있음.
  // each 메서드의 콜백함수의 인자 순서가 다름.
  // el 속성에 접근하기 위해서는 cheerio 객체로 한 번 감싸줘야 함. $(el)
  elements.each((idx, el) => {
    console.log(idx, $(el).text());
  });

  const textArray = elements
    .map((i, el) => {
      return $(el).text();
    })
    .toArray();
  console.log(textArray);

  return 'hello';
};

main().then((re) => console.log(re));

//'https://yjiq150.github.io/coronaboard-crawling-sample/dom'
