/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}
levelOne(); // 20

// 덮어쓰기
function levelOne() {
  var numberOne = 40; // 새로 선언하면?

  console.log(numberOne);
}
levelOne(); // 40

console.log(numberOne); // 20

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo: ${numberTwo}`);
    console.log(`levelTwo numberOne: ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne: ${numberOne}`);
}
levelOne();
// levelTwo numberTwo: 99
// levelTwo numberOne: 40
// levelOne numberOne: 40
// -> 가장 가까운 스코프의 변수를 활용함

/**
 * JS는 Lexical Scope: 선언된 위치가 상위 스코프를 정함
 *
 * 반대는 Dynamic Scope: 실행된 위치가 상위 스코프를 정함
 */
var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne(); // 3
// functionTwo 함수의 선언 위치는 글로벌 스코프임 -> 글로벌 변수의 값인 3을 가져옴

/**
 * var, let
 */
var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i); // 0 ~ 9
}
console.log(`i in global scope: ${i}`); // 10

i = 999;

for (let i = 0; i < 10; i++) {
  console.log(i); // 0 ~ 9
}
console.log(`i in global scope: ${i}`); // 999
/**
 * var: 함수 level scope
 * let, const: block level scope
 */
