/**
 * try...catch
 * 에러 핸들링
 *
 * 1) 에러를 발생시킬 때 - 던진다고 함(throw)
 * 2) 명시적으로 인지할 때 - 잡는다고 함(catch)
 *
 * 에러를 만나면 실행을 멈추고 에러 메시지로 Error 함수의 파라미터를 출력함
 */
function runner() {
  try {
    console.log(`hello`);

    throw new Error(`문제 발생!!!`);

    console.log(`world`);
  } catch (e) {
    console.log(`---catch---`);
    console.log(e); // Error: 문제 발생!!!
  } finally {
    // 에러가 있든 없든 무조건 실행
    // 옵션임
    console.log(`---finally---`);
  }
}
runner();

// hello
// ---catch---
// Error: 문제 발생!!!
//     at runner (/Users/pfe/workspace/study/js/code-factory/1_basics/16_try_catch.js:14:11)
//     at Object.<anonymous> (/Users/pfe/workspace/study/js/code-factory/1_basics/16_try_catch.js:26:1)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49
// ---finally---
