/**
 * 티입 변환
 * Type Conversion
 *
 * 1) 명시적 변환
 * 2) 암묵적 변환
 */
let year = 1995;
console.log(typeof year, year); // number 1995

// 명시적 변환
let stringYear = year.toString();
console.log(typeof stringYear, stringYear); // string 1995

// 숫자와 문자를 더하면 문자가 됨
let test = year + ``;
console.log(typeof test, test); // string 1995

console.log(`2000` + 1000); // 20001000 - 문자와 숫자를 더하면 문자로 변환됨
console.log(`2000` * 1000); // 2000000 - 문자와 숫자를 곱하면 숫자가 됨
console.log(`2000` - 1000); // 1000 - 빼면 숫자가 됨
console.log(`2000` / 1000); // 2 - 나누면 숫자가 됨
// -> 기능적으로는 가능하지만 실무에서는 이렇게 하면 안 됨

/**
 * 명시적 변환 몇가지 더
 */
// 문자열로 변환: toString()
console.log(typeof (2000).toString(), (2000).toString()); // string 2000
console.log(typeof true.toString(), true.toString()); // string true

// 숫자로 변환: parseInt(), parseFloat(), +, -
console.log(typeof parseInt(`2000`), parseInt(`2000`)); // number 2000
console.log(typeof +`1`, +`1`); // number 1

// 불리언으로 변환
/**
 * Truthy, Falsy
 * 참 같은 값, 거짓 같은 값
 *
 * Truthy: Boolean에서 true로 평가되는 값
 * true, {}, [], 11, -11, `11`, `false`, function, Infinity, -Infinity, `0`
 *
 * Falsy: Boolean에서 false로 평가되는 값
 * false, 0, -0, 0n, ``, null, undefined, NaN, document.all
 */
console.log(!``); // true
console.log(!`king`); // false

console.log(!1); // false
console.log(!0); // true

console.log(!undefined); // true
console.log(!null); // true

console.log(!{}); // false
console.log(![]); // false

// 느낌표 두 개도 가능함
console.log(!!``); // false
console.log(!!`king`); // true
