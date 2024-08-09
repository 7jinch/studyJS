/**
 * Data Types
 *
 * 6개의 Primitive Type과 1개의 Object Type
 *
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리안)
 * 4) undefined
 * 5) null
 * 6) Symbol(심볼)
 *
 * 7) Object(객체)
 *    Function
 *    Array
 *    Object
 */
const pi = 3.14;
console.log(typeof pi);

const infinity = Infinity; // 양의 무한
const nInfinity = -Infinity; // 음의 무한
console.log(typeof infinity, typeof nInfinity);

/**
 * String 타입
 */
let kingHalo = `킹 헤일로`;
console.log(typeof kingHalo);

/**
 * Escaping Charater
 * 1) newLing - \n
 * 2) tab - \t
 * 3) backSlash - \\
 */
kingHalo = `킹\n헤일로`;
console.log(kingHalo);

/**
 * Template Literal - 귀찮게 이스케이프 문자 안 써도 됨
 *
 * backtick - `
 */
kingHalo = `킹
헤이로`;
console.log(kingHalo);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue, typeof isFalse);

/**
 * Undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 직접 값을 undefined로 초기화하는 것은 지양해야 함
 */
let noInit;
console.log(noInit, typeof noInit);

/**
 * null
 *
 * undefined처럼 값이 없다는 뜻이지만
 * JS에서는 개발자가 명시적으로 값이 없다는 것으로 초기화 할 때 사용함
 * 타입을 출력하면 object가 나옴(JS개발자도 인정한 버그임)
 */
let init = null;
console.log(init, typeof init);

/**
 * Symbole 타입
 *
 * 유일무이한 값을 생성할 때 사용함
 * 다른 원시 타입과는 다르게 Symbol 함수를 호출해서 사용함
 */
const test1 = `1`;
const test2 = `1`;
console.log(test1 === test2); // 이건 true

const symbol1 = Symbol(`1`);
const symbol2 = Symbol(`1`);
console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 *
 * Map
 * 키: 밸류의 쌍으로 이루어져있음
 * key:value
 */
const dict = {
  red: `빨간색`,
  orange: `오렌지색`,
  yellow: `노란색`,
};
let r = `red`;
console.log(dict);
console.log(dict[r]);
console.log(dict.orange);

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있음
 */
const arr = [`supe`, `gurasu`, `eru`, `sei`, `kingu`];
console.log(arr[1]);

/**
 * static typing - 변수를 선언할 때 어떤 타입의 변수인지 명시함
 * dynamic typing - 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론함
 * JS <- dynamic typing
 */
