/**
 * Closure
 * 클로저
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조함이다"
 * -> "상위 함수보다 하위 함수가 더 오래 살아있는(콜 스택에서 더 오래 남아있는) 경우를 클로저라고 한다"
 */
// function getN() {
//   var n = 5;

//   function innerGetN() {
//     return n;
//   }

//   return innerGetN(); // 함수를 실행
// }

// console.log(getN()); // 5
// 이 케이스는 상위 함수가 더 오래 살아있는 경우임

function getN() {
  var n = 5;

  function innerGetN() {
    return n;
  }

  return innerGetN; // 함수 자체를 반환
}

const runner = getN();

console.log(runner); // [Function: innerGetN]
console.log(runner()); // 5
// 이미 getN 함수는 콜 스택에서 사라졌지만 innerGetN 함수를 실행할 수 있음
// 콜 스택에 getN 함수가 없는 상태로 innerGetN가 올라감
// 렉시컬 스코프에 의해 innerGetN의 변수 n의 값도 5가 됨(선언, 정의될 때 위치가 상위 스코프를 정하는 룰)
// -> 클로저

/**
 * 그래서 어디에 활용함?
 *
 * 1) 데이터 캐싱
 */
// function cacheFunc(newN) {
//   // 매우 오래 걸리는 계산이라고 가정
//   var n = 10 * 10;

//   return n * newN;
// }

// console.log(cacheFunc(10));
// console.log(cacheFunc(20));
// console.log(cacheFunc(30));

function cacheFunc() {
  // 매우 오래 걸리는 계산이라고 가정
  var n = 10 * 10;

  // 변수를 하위 함수에서 받음
  function innerCacheFunc(newN) {
    // 하위 함수에서 결과 반환
    return n * newN;
  }

  // 하위 함수 자체를 반환
  return innerCacheFunc;
}

const runner2 = cacheFunc();
// 오래 걸리는 계산이 완료한 상태가 됨
// (n에 10 * 10의 값은 들어가 있는 상태가 됨)
console.log(runner2(10)); // 1000
console.log(runner2(20)); // 2000
console.log(runner2(30)); // 3000

/**
 * 2) 단순 오래 걸리는 계산
 */
function cacheFunc2() {
  var m = 99;

  function increment() {
    m++;

    return m;
  }

  return increment;
}

const runner3 = cacheFunc2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
// increment 함수는 m의 값을 기억하고 있고 + 계산만 실행하면 됨

/**
 * 3) 정보 은닉
 *
 * 자바스크립트에서는 private이 생긴지 얼마 안 되서 그 전에는 이렇게 했음
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}이고 ${_year}년에 태어났어요`;
  };
}

const yuJin = new Idol(`안유진`, 2003);
console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined
// _year는 this 키워드로 할당하지 않았기 때문에 객체의 프로퍼티로 접근할 수 없음

console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진이고 undefined년에 태어났어요
// 생성완료가 된 객체의 함수 안에서 나중에 가져올 수 있음
