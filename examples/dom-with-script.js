// script 태그 안에 하드 코딩되어 있는 데이터를 크롤링하는 방법.
// 가상환경(vm)을 통해 script 태그 안의 코드를 실제로 실행시킨 후 데이터 가져오기.

const axios = require('axios');
const cheerio = require('cheerio');

// 추출된 자바스크립트 코드를 별도 실행하는 가상 환경 기능 로드.
const vm = require('vm');

async function main() {
  const resp = await axios.get(
    'https://yjiq150.github.io/coronaboard-crawling-sample/dom-with-script',
  );

  const $ = cheerio.load(resp.data);

  // script 태그 안의 코드를 추출.
  // text 만이 아니라 html 요소 자체를 가져와야 하기에 text() 가 아닌 html() 메서드를 사용.
  const extractedCode = $('script').first().html();

  // 빈 객체를 생성하고, 이를 인자로 하는 가상환경 생성 및 실행.
  const context = {};
  vm.createContext(context);
  vm.runInContext(extractedCode, context);

  console.log(context.dataExample.title); // 제목
  console.log(context.dataExample.content); // 크롤링할 내용
}

main();

// 'https://yjiq150.github.i o/coronaboard-crawling-sample/dom-with-script'