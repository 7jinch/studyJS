/**
 * Hoisting
 */
console.log(`special`);
console.log(`week`);

// console.log(name);
// var name = `king halo`;
// console.log(name);

/**
 * 이렇게 동작하는 것처럼 보이는 현상을 말함
 */
// var name;
// console.log(name);
// name = `king halo`;
// console.log(name);

/**
 * Hoising이란 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상임
 */
// console.log(sky); <- 바로 변수 사용하면
// // let sky = `seiun sky`; <- (주석 처리)
// sky is not defined

// console.log(sky); <- 변수 사용하고
// let sky = `seiun sky`; <- let으로 초기화하면
// Cannot access 'sky' before initialization

/**
 * var 대신 let을 사용해야 하는 이유
 *
 * var는 Hoising 현상을 막지 못 함
 * let, const는 값이 초기화되기 전에 값을 가져오는 것을 방지할 수 있음
 */
