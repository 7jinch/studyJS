/**
 * Async Await
 */
const getPromise = (seconds) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(`완료`);
    }, seconds * 1000);
  });

/**
 * 함수 앞에 await 키워드를 붙이고
 * Promise 객체에 await 키워드를 붙여서 변수로 받으면 resolve 함수의 반환값을 받을 수 있음
 */
// async function runner() {
//   const result1 = await getPromise(1);
//   console.log(result1);
// }

// runner();
// console.log(`실행 끝`);
// 실행 끝
// 완료

/**
 * 읽기 힘들게 then을 길게 나열할 필요없이 await만 해주면 됨
 */
// async function runner() {
//   const result1 = await getPromise(1);
//   console.log(result1);
//   const result2 = await getPromise(2);
//   console.log(result2);
//   const result3 = await getPromise(2);
//   console.log(result3);
// }

// runner();
// console.log(`실행 끝`);
// 실행 끝
// 완료
// 완료
// 완료

/**
 * reject는 try...catch문으로 받을 수 있음
 */
const getPromise2 = (seconds) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(`에러`);
    }, seconds * 1000);
  });

async function runner2() {
  try {
    const result1 = await getPromise2(1);
    console.log(result1);
    const result2 = await getPromise2(2);
    console.log(result2);
    const result3 = await getPromise2(2);
    console.log(result3);
  } catch (e) {
    console.log(`catch e`);
    console.log(e);
  } finally {
    console.log(`finally`);
  }
}

runner2();
console.log(`실행 끝`);
// 실행 끝
// catch e
// 에러
// finally
