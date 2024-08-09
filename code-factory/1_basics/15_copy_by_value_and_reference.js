/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 *
 * 1) 기본적으로 모든 원시값은 copy by value
 * 2) 객체는 copy by reference
 */
let original = `hello`;
let clone = original;

console.log(original); // hello
console.log(clone); // hello

clone += `world!`;
console.log(original); // hello
console.log(clone); // hello world!

console.log(original === clone); // false

/**
 * 객체의 경우
 */
let originalObj = {
  name: `スペシャルウィーク`,
  korName: `스페셜 위크`,
};
let cloneObj = originalObj;

console.log(originalObj); // { name: 'スペシャルウィーク', korName: '스페셜 위크' }
console.log(cloneObj); // { name: 'スペシャルウィーク', korName: '스페셜 위크' }

originalObj[`engName`] = `special week`;

console.log(originalObj); // { name: 'スペシャルウィーク', korName: '스페셜 위크', engName: 'special week' }
console.log(cloneObj); // { name: 'スペシャルウィーク', korName: '스페셜 위크', engName: 'special week' }

console.log(originalObj === cloneObj); // true
console.log(`---------------------------------`);
/**
 * copy by reference
 *
 * 1) originalObj 객체를 생성함
 * 2) originalObj와 {name: `スペシャルウィーク`, korName: `스페셜 위크`};라는 값이 서로 다른 메모리 상에 할당됨
 * 3) originalObj가 가지는 실제 값은
 *    {name: `スペシャルウィーク`, korName: `스페셜 위크`};라는 값이 있는 메모리의 주소값임
 * 4) let cloneObj = originalObj; <- cloneObj에 originalObj의 값을 할당하는 것은
 *    {name: `スペシャルウィーク`, korName: `스페셜 위크`};라는 값이 있는 메모리의 주소값을 복사하는 거임
 * 5) 즉, 같은 주소값을 가리키게 되서 실제 객체가 변경되면 둘 다 바뀐 값을 반환함
 */

const test1 = {
  name: `サイレンススズカ`,
  korName: `사일런스 스즈카`,
};
const test2 = test1; // 같은 메모리 공간 참조
const test3 = {
  // 같은 값이지만 다른 메모리 공간
  name: `サイレンススズカ`,
  korName: `사일런스 스즈카`,
};

console.log(test1 === test2); // true
console.log(test1 == test3); // false
console.log(test2 === test3); // false

/**
 * spread operator
 *
 * 당연하지만 copy by value임
 */
const test4 = {
  ...test1,
  engName: `silence suzuka`,
};
console.log(test4); // { name: 'サイレンススズカ', korName: '사일런스 스즈카', engName: 'silence suzuka' }
