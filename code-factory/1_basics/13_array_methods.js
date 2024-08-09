/**
 * 배열 메서드
 * Array Methods
 *
 * 메서드는 클래스에 귀속되는 함수를 말함
 */
let umamusume = [
  `스페셜 위크`,
  `사일런스 스즈카`,
  `토카이 테이오`,
  `마루젠스키`,
  `후지 키세키`,
  `오구리 캡`,
];
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * push()
 * 배열 끝에 추가함
 * 리턴값은 배열에 값을 추가한 후의 배열의 길이임
 * 배열을 직접 변경함
 */
console.log(umamusume.push(`골드 쉽`)); // 7
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡', '골드 쉽' ]

/**
 * pop()
 * 배열 마지막 요소를 삭제함
 * 리턴값은 배열 마지막 요소임
 * 배열을 직접 변경함
 */
console.log(umamusume.pop()); // 골드 쉽
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * shift()
 * 배열 첫번째 요소를 삭제함
 * 리턴값은 첫번째 요소임
 * 배열을 직접 변경함
 */
console.log(umamusume.shift()); // 스페셜 위크
console.log(umamusume); // [ '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * unshift()
 * 배열 가장 처음에 값을 추가함
 * 리턴값은 추가한 후의 배열의 길이임
 * 배열을 직접 변경함
 */
console.log(umamusume.unshift(`스페셜 위크`)); // 6
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * splice()
 * 배열의 값을 삭제함
 * 첫번째 인자는 시작 인덱스, 두번째 인자는 삭제할 요소의 수
 * 리턴값은 삭제한 요소 배열임
 * 배열을 직접 변경함
 */
console.log(umamusume.splice(0, 3)); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오' ]
console.log(umamusume); // [ '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * 위의 함수들은 배열을 직접 변경하기 때문에 사용하지 않는 것이 좋음
 * 아래 함수들은 같은 기능을 하지만 직접 변경은 하지 않아서 이걸 쓰자
 */
console.log(`---------------------------`);
umamusume = [
  `스페셜 위크`,
  `사일런스 스즈카`,
  `토카이 테이오`,
  `마루젠스키`,
  `후지 키세키`,
  `오구리 캡`,
];
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * concat(): push()와 비슷함
 * 배열 마지막에 요소를 추가함
 * 리턴값은 추가한 후의 배열
 * 다른 메모리 공간에 복제하고 원래의 배열은 수정하지 않음
 */
console.log(umamusume.concat(`보드카`)); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡', '보드카' ]
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * slice(): splice()와 비슷함
 * 요소를 삭제함
 * 처음 인자는 시작할 인덱스, 두번째 인자는 삭제할 인덱스 + 1
 * 리턴값은 삭제한 요소의 배열
 * 직접 변경 x
 */
console.log(umamusume.slice(0, 3)); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오' ]
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * spread operator
 * 전개 연산자
 * 배열 요소들을 하나씩 리턴함
 * ...을 안 붙이면 배열 자체가 들어감
 * 직접 변경 x
 */
let umamusume2 = [...umamusume];
console.log(umamusume2); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

let umamusume3 = [umamusume];
console.log(umamusume3); // [ [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ] ]

console.log(...umamusume); // 스페셜 위크 사일런스 스즈카 토카이 테이오 마루젠스키 후지 키세키 오구리 캡
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * join()
 * 요소들을 하나의 문자열로 합쳐서 리턴함
 * 파라미터로 구분자를 추가할 수 있음
 */
console.log(umamusume.join()); // 스페셜 위크,사일런스 스즈카,토카이 테이오,마루젠스키,후지 키세키,오구리 캡
console.log(typeof umamusume.join()); // string
console.log(umamusume.join(`//`)); // 스페셜 위크//사일런스 스즈카//토카이 테이오//마루젠스키//후지 키세키//오구리 캡

/**
 * sort() - 오름차순
 * reverse() - 내림차순
 * 직접 변경함
 */
umamusume.sort();
console.log(umamusume); // [ '마루젠스키', '사일런스 스즈카', '스페셜 위크', '오구리 캡', '토카이 테이오', '후지 키세키' ]
umamusume.reverse();
console.log(umamusume); // [ '후지 키세키', '토카이 테이오', '오구리 캡', '스페셜 위크', '사일런스 스즈카', '마루젠스키' ]

/**
 * sort() 응용
 * 인자값으로 비교 함수를 넣을 수 있음
 * 비교 함수를 생략하면 배열의 모든 요소를 문자열 취급하고 유니코드값 순서로 정렬함
 * 비교 함수의 리턴값이(a - b가)
 * 1) 양수 - a가 더 크기 때문에 a는 뒤에 있어야 함
 * 2) 음수 - a가 더 작기 때문에 a는 앞에 있어야 함
 * 3) 0 - a, b의 순서를 바꾸지 않음
 * -> 비교 함수의 리턴값으로 배열의 요소를 비교해서 정렬
 */
let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];

// numbers.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(numbers); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// numbers.sort((a, b) => (a < b ? 1 : -1));
// console.log(numbers); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => -(a - b));
console.log(numbers);

/**
 * map()
 * 배열 직접 변경 x
 */
umamusume = [
  `스페셜 위크`,
  `사일런스 스즈카`,
  `토카이 테이오`,
  `마루젠스키`,
  `후지 키세키`,
  `오구리 캡`,
];
console.log(umamusume.map((x) => x + `!`)); // [ '스페셜 위크!', '사일런스 스즈카!', '토카이 테이오!', '마루젠스키!', '후지 키세키!', '오구리 캡!' ]
console.log(umamusume); // [ '스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

console.log(
  umamusume.map((x) => {
    if (x === `스페셜 위크`) {
      return `일본총대장 ${x}`;
    } else {
      return x;
    }
  })
);
// [ '일본총대장 스페셜 위크', '사일런스 스즈카', '토카이 테이오', '마루젠스키', '후지 키세키', '오구리 캡' ]

/**
 * filter()
 * 모든 요소를 다 필터
 * true - 해당 요소 리턴 o
 * false - 해당 요소 리턴 x
 * 배열 직접 변경 x
 */
numbers = [3, 7, 5, 2, 0];
console.log(numbers.filter((x) => true)); // [ 3, 7, 5, 2, 0 ]
console.log(numbers.filter((x) => false)); // []

console.log(numbers.filter((x) => x % 2 !== 0)); // [ 3, 7, 5 ]

/**
 * find()
 * filter와 비슷하지만 찾으면 바로 종료
 * true - 해당 요소 리턴 o
 * false - 해당 요소 리턴 x
 * 배열 직접 변경 x
 */
console.log(numbers.find((x) => true)); // 3
console.log(numbers.find((x) => false)); // undefined

console.log(numbers.find((x) => x % 2 !== 0)); // 3

/**
 * findIndex()
 * 조건에 맞는 인덱스를 리턴
 */
console.log(numbers.findIndex((x) => x % 2 !== 0)); // 0

/**
 * reduce()
 * 첫번째 파리미터는 함수인데 next에는 배열 요소의 값을 하나씩 들어감(map처럼), prev에는 기존 리턴값이 들어감
 * 두번째 파라미터는 함수에서 처음 prev로 줄 값(처음 루프에서 시작할 값)
 *
 * 첫번째 파라미터는 콜백함수
 * 두번째 파라미터는 초기값
 */
console.log(numbers.reduce((prev, next) => prev + next, 0)); // 17
/**
 * 처리 과정
 * 1) 초기값 0이 prev에 입력됨
 * 2) numbers 배열의 처음 요소인 3이 next에 입력됨
 * 3) prev + next 즉, 0 + 3의 결과값인 3이 반환됨
 * 4) 3번째에서 반환된 값 3이 prev에 입력됨
 * 5) 배열의 두번째 값인 7이 next에 입력됨
 * 6) prev + next 즉, 3 + 7이 리턴됨
 * ...
 */
