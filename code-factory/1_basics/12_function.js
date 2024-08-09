/**
 * 함수 Function
 *
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 리턴받고 싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString()); // 1

/**
 * 만약 맨 앞의 숫자만 바꾸고 싶다면 어떻게 해야할까?
 *
 * DRY(Don't Repeat Yourself)
 */
function calc(n) {
  console.log((((n * 10) / 2) % 3).toString());
}
calc(`10`); // 2

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 함 : n
 * 실제로 입력하는 값은 Argument라고 함 : `10`
 */

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 5); // 10

// default parameter
function multiply(x, y = 5) {
  // 함수명을 그래로 사용하면 var처럼 덮어쓰기가 됨
  console.log(x * y);
}
multiply(2); // 10

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
  return x * y;
}
const result1 = multiply(2, 5);
console.log(result1);

/**
 * 화살표 함수
 * Arrow 함수
 */
// 기본 형태
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4)); // 12

// 간단하게: 함수 바디가 한 줄만 있을 경우
const multiply3 = (x, y) => x * y;
console.log(multiply3(3, 4)); // 12

// 간단하게: 파라미터가 하나일 경우
// 파라미터 괄호도 안 적어도 되는데 자동완성 때문에 자꾸 생기네
const multiply4 = (x) => x * 2;
console.log(multiply4(2)); // 4

// 조금 복잡한 형태 : 함수를 리턴하는 함수
/**
 * x라는 파라미터를 받아서 (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;라는 함수를 리턴함
 * y라는 파라미터를 받아서 (z) => `x: ${x}, y: ${y}, z: ${z}`;라는 함수를 리턴함
 * z라는 파라미터를 받아서 `x: ${x}, y: ${y}, z: ${z}`;를 리턴함
 */
const ex1 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(ex1(2)(5)(10)); // x: 2, y: 5, z: 10

// 일반 함수로 작성하면
function ex2(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}
console.log(ex2(2)(5)(10)); // x: 2, y: 5, z: 10

// 무명함수
const ex3 = function (x, y) {
  return x * y;
};
console.log(ex3(2, 5)); // 10

/**
 * Arguments 키워드
 * 입력받은 파라미터를 객체 형태로 리턴해줌
 */
const test = function (x, y, z) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 5, '2': 10 }
  return x * y * z;
};
console.log(test(2, 5, 10)); // 100

// Arguments를 원하는 만큼 입력받기
const test2 = function (...arg) {
  return Object.values(arg).reduce((a, b) => a * b, 1);
};
console.log(test2(1, 2, 3, 4, 5)); // 120

/**
 * 즉시 실행 함수
 * 정의하자마자 바로 실행됨
 * immediately invoked function
 *
 * 함수를 괄호로 묶고 끝에 괄호를 열고 닫기
 */
(function (x, y) {
  console.log(x * y); // 10
})(2, 5);

console.log(typeof test); // function
console.log(test instanceof Object); // true
// -> 함수도 객체다
