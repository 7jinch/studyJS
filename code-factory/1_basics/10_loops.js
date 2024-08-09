/**
 * Loops 반복문
 *
 * 1) for
 * 2) while
 */
// for (let i = 0; i < 10; i++) {
//   console.log(i); // 0 ~ 9
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i); // 10 ~ 1
// }

// let square = ``;
// let side = 6;

// for (let i = 0; i < side; i++) {
//   for (let j = 0; j < side; j++) {
//     square += `*`;
//   }
//   square += `\n`;
// }
// console.log(square); // 6 * 6 사각형

/**
 * for...in 루프: key를 가져옴
 */
// const kingObject = { name: `king`, year: 1995, g1: 1 };
// for (let key in kingObject) {
//   console.log(key, kingObject[key]); // name king, year 1995, g1 1
// }

// const kingArray = [`king`, 1995, 1];
// for (let key in kingArray) {
//   console.log(kingArray[key]); // king 1995 1
// }

/**
 * for...of 루프: value를 가져옴
 */

/**
 * while 루프
 */
// let number = 0;

// while (number < 10) {
//   number++;
//   console.log(number);
// }

/**
 * do...while 루프
 */
// do {
//   number++;
//   console.log(number);
// } while (number < 10);

/**
 * break
 */
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// let n = 0;
// while (n < 10) {
//   if (n === 5) {
//     break;
//   }
//   n++;
//   console.log(n);
// }

/**
 * continue
 */
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i); // 0 2 4 6 8
// }
