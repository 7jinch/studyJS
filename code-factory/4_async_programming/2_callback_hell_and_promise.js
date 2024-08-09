/**
 * Callback
 */
// function waitAndRun() {
//   setTimeout(() => {
//     console.log(`끝`);
//   }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//   setTimeout(() => {
//     console.log(`1번 콜백 끌`);
//     setTimeout(() => {
//       console.log(`2번 콜백 끌`);
//       setTimeout(() => {
//         console.log(`3번 콜백 끌`);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// waitAndRun2();

/**
 * Promise
 *
 * 첫번째 파라미터는 resolve, 두번째 파라미터는 reject
 * resolve: 반환받은 Promise 객체(timeoutPromise)에서 then을 붙이면 resolve 함수가 실행되는 시점에
 *          resolve의 파라미터(`완료`라는 문자열)를 받을 수 있음
 * reject: 에러가 발생했을 때 catch에서 reject 함수가 실행되는 시점에
 *         reject의 파라미터(`에러` 문자열)를 받을 수 있음
 */
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`완료`);
//   }, 2000);
// });

// timeoutPromise.then((resolve) => {
//   console.log(`then`);
//   console.log(resolve);
// });

// const getPromise = (seconds) =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`완료`);
//     }, seconds * 1000);
//   });

// getPromise(2)
//   .then((res) => {
//     console.log(`first then`);
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log(`second then`);
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log(`third then`);
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log(`fourth then`);
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log(`fifth then`);
//     console.log(res);

//     return getPromise(2);
//   });

// const getPromise = (seconds) =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(`에러`);
//     }, seconds * 1000);
//   });

// getPromise(2)
//   .then((res) => {
//     console.log(`first then`);
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(`first catch`);
//     console.log(res);
//   });

const getPromise = (seconds) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      // if(xxx){
      //   res(`성공`)
      // }else{
      //   rej(`에러`)
      // }
      res(`성공`);
    }, seconds * 1000);
  });

// getPromise(2)
//   .then((res) => {
//     console.log(`first then`);
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(`first catch`);
//     console.log(res);
//   })
//   .finally(() => {
//     console.log(`finally`);
//   });
// first then
// 성공
// finally

/**
 * 여러개의 Promise를 동시에 할 수도 있음
 *
 * 가장 느린 함수를 기준으로 then, catch가 불림
 */
Promise.all([getPromise(1), getPromise(3), getPromise(5)]).then((res) => {
  console.log(res);
});
// [ '성공', '성공', '성공' ]
