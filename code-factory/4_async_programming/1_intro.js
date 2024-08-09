/**
 * Async Programming
 *
 * Thread란? 가장 작은 working unit으로 동시에 작업할 수 있는 단위
 * 자바스크립트는 싱글 스레드이기 때문에 동시에 하나의 작업만 수행할 수 있음
 */

/**
 * 동기 프로그래밍
 * 콘솔에 `hello` 출력 -> 2초가 걸리는 작업 시작 -> 위 작업 시작 후(작업이 끝나기 전) 바로 `world` 출력 -> 2초가 걸리는 작업 완료 후 `완료` 출력
 */
// function longWork() {
//   const now = new Date(); // 현재 날짜를 가져옴

//   /**
//    * milliseconds since epoch
//    * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환함
//    */
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   // 2초동안 실행
//   while (new Date().getTime() < afterTwoSeconds) {}

//   console.log(`완료`);
// }

// console.log(`hello`);
// longWork(); // 바로 실행되서 2초 기다려야 함
// console.log(`world`);
// hello
// 완료
// world

/**
 * Async Programming
 */
function longWork() {
  setTimeout(() => {
    console.log(`완료`);
  }, 1);
}

function longWork2() {
  setTimeout(() => {
    console.log(`완료2`);
  }, 2000);
}

longWork2();
console.log(`hello`);
longWork(); // 2초 뒤에 실행됨
console.log(`world`);
// hello
// world
// 완료

/**
 * Event Loop
 *
 * js 엔진 내의 call stack에 함수가 올라가는데 만약 그 함수가 비동기 함수라면 event queue(or task queue)로 옯겨짐
 * event loop는 evnet queue를 계속 바라보다가 실행이 종료된 함수가 있는지 확인함
 * 추가로 call stack이 비어있는지도 확인함
 * 만약 evnet queue에 종료가 된 함수가 있고 call stack이 비어있다면 종료된 함수를 call stack으로 옮기고 실행함
 */
