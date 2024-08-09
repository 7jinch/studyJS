/**
 * this
 *
 * 다른 언어와는 다르게 this가 가리키는 값이 바뀜
 * JS은 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 선언(정의) 시점에 평가됨
 * 하지만 this 키워드는 객체가 생성되는 시점에 바인딩이 결정됨(중요)
 */
const testFunc = function () {
  return this;
};

console.log(testFunc());
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */
}
console.log(testFunc() === global); // true

const yuJin = {
  name: `안유진`,
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다`;
  },
};
console.log(yuJin.sayHello()); // 안녕하세요 저는 안유진입니다

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다`;
  };
}
const yuJin2 = new Person(`안유진`, 2003);
console.log(yuJin2.sayHello()); // 안녕하세요 저는 안유진입니다

// Person.prototype.dance = function () {
//   return `${this.name}이 춤을 춘다`;
// };
// console.log(yuJin2.dance()); // 안유진이 춤을 춘다

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춘다`;
  }
  return dance2();
};
console.log(yuJin2.dance()); // undefined이 춤을 춘다

/**
 * this 키워드가 어떤 것을 가리키느냐는 3가지만 기억하면 됨
 *
 * 1) 일반 함수로 호출할 때는 this가 최상위 객체(global 또는 window)를 가리킴 -> 위 예시에서는 `undefined이 춤을 춘다`
 * 2) 메서드로 호출할 떄는 호출된 객체를 가리킴
 * 3) new 키워드를 사용해서 객체를 생성했을 때는 객체를 가리킴
 */

/**
 * this에 원하는(예상하는) 값으로 매핑하는 방법 3가지
 *
 * 1) call(): 파라미터를 콤마를 기준으로 넘겨줘야 함
 * 2) apply(): 파라미터를 리스트로 넘겨줘야 함
 * 3) bind()
 */
function returnName() {
  return this.name;
}

console.log(returnName()); // undefined <- 글로벌에 매핑됨

const yuJin3 = {
  name: `안유진`,
};

console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진

/**
 * call(): 파라미터를 콤마를 기준으로 넘겨줘야 함
 * apply(): 파라미터를 리스트로 넘겨줘야 함
 *
 * 즉시 바로 함수가 실행됨
 */
function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5)); // 안유진 / 결과값: 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); // 안유진 / 결과값: 60

/**
 * bind(): call처럼 파라미터를 콤마를 기준으로 넘겨줘야 함
 *
 * 바로 실행되지 않고 바인드가 된 함수 반환해줘야 함
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc()); // 안유진 / 결과값: 60
