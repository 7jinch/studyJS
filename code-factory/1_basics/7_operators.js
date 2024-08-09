/**
 * operators
 * 연산자
 */

/**
 * 산술연산자
 *
 * 사칙연산 + 나머지연산
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

/**
 * 증감연산
 */
let number = 0;
console.log(number++); // 0
console.log(++number); // 2

console.log(number--); // 2
console.log(--number); // 0

/**
 * 증감연산 연산자 위치
 */
let result = 0;
console.log(result);

result = number++;
console.log(result, number); // 0 1

result = ++number;
console.log(result, number); // 2 2

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 */
let sample = `99`;
console.log(+sample, typeof +sample); // 계산하는 라인에서만 타입이 변경되고 값은 변하지 않음
console.log(sample, typeof sample); // 원래 타입과 값은 변하지 않음

sample = true;
console.log(+sample, typeof +sample); // 1 number

sample = false;
console.log(+sample, typeof +sample); // 0 number

sample = `king`;
console.log(+sample, typeof +sample); // 문자열은 NaN number

/**
 * 할당 연산자(assignment operator)
 */
num = 100;
num += 10;
console.log(num);

num *= 10;
console.log(num);

num %= 3;
console.log(num);

/**
 * 비교 연산자
 *
 * 1) 값의 비교: ==, !=
 * 2) 값과 타입의 비교: ===, !==
 */
console.log(5 == 5); // true
console.log(5 == `5`); // true
console.log(0 == ``); // true
console.log(true == 1); // true
console.log(true == `1`); // true

console.log(5 === 5); // true
console.log(5 === `5`); // false
console.log(0 === ``); // false
console.log(true === 1); // false
console.log(true === `1`); // false

console.log(5 != 5); // false
console.log(5 != `5`); // false
console.log(0 != ``); // false
console.log(true != 1); // false
console.log(true != `1`); // false

console.log(5 !== 5); // false
console.log(5 !== `5`); // true
console.log(0 !== ``); // true
console.log(true !== 1); // true
console.log(true !== `1`); // true

/**
 * 대소 비교
 */
console.log(100 > 0);
console.log(100 >= 0);

/**
 * 삼항 연산자(ternary operator)
 */
console.log(100 > 0 ? `100이 0보다 크다` : `100이 0보다 작다`);

/**
 * 논리 연산자
 *
 * 1) && and 논리곱: 모두 true여야 true를 반환함
 * 2) || or 논리합: 모두 false여야 false를 반환함, 하나만 true여도 true를 반환함
 */
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false

console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

/**
 * 단축평가(short circuit evaluation)
 *
 * 논리 연산자는 좌항에서 우항으로 평가가 진행됨
 *
 * 1) &&를 사용했을 경우 false를 만나면 평가를 멈추고 해당 값을 반환함
 * false가 없을 경우 가장 마지막 값을 반환함
 * (&&는 모두 true여야 true를 반환)
 *
 * 2) ||를 사용했을 경우 true를 만다면 평가를 멈추고 해당 값을 반환함
 * true가 없을 경우 가장 마지막 값을 출력함
 * (||는 하나만 true여도 됨)
 */
console.log(true && 1 && 0 && true); // 0
console.log(true && 1 && 1 && `king`); // king

console.log(`spe` || 1 || 1 || `king`); // spe
console.log(0 || false || null || undefined); //undefined

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
console.log({} && `gurasu` && Infinity); // Infinity
console.log([] && `` && `false`); // 빈 문자열

console.log(`` || null || `king` || Infinity); // king

/**
 * 지수 연산자
 */
console.log(2 ** 10);
console.log(2 ** (10 ** 2));

/**
 * null 연산자: ??
 *
 * 좌측이 null이거나 undefined이면 우측의 값을 저장함
 */
let name;
console.log(name); // nudefined
name = name ?? `king`;
console.log(name); // king

let name2;
name2 ??= `spe`;
console.log(name2); // spe
