// 크롤링하려는 싸이트에서 원하는 데이터를 api 호출을 통해 외부로부터 받아오는 경우.
// 먼저 해당 싸이트의 '개발자 도구 > 네트워크 > 돋보기 아이콘' 등을 이용하여 데이터가 있는 api 경로를 찾는다.
const axios = require('axios');

async function main() {
  const resp = await axios.get(
    'https://yjiq150.github.io/coronaboard-crawling-sample/example-data.json',
  );

  console.log(resp.data.title); // 출력: 'API 호출로 받아온 제목입니다'
  console.log(resp.data.content); // 출력: 'API 호출로 받아온 내용입니다'
}

main();

// 'https://yjiq150.github.io/coronaboard-crawling-sample/http-api'

// 'https://yjiq150.github.io/coronaboard-crawling-sample/example-data.json'
