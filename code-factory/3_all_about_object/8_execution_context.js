/**
 * Execution Context
 * 실행 컨텍스트
 *
 * 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경힘
 * 코드 실행에 필요한 모든 데이터를 담고있는 환경
 *
 * global context
 * 코드를 실행하면 무조건 생성되는 최상위 컨텍스트로 웹에서의 window 객체나 node에서의 global 객체를 생성해 담고있음
 *
 * function context
 * 함수가 실행될 때마다 함수마다 실행되는 컨텍스트로 함수 실행에 대한 모든 정보를 담고있음
 *
 * Memory Heep & Call Stack(Execution Context Stack, 스택은 후입선출)
 *
 * Execution Context가 생성될 때는
 * 1) Creation Phase
 *    window or global 객체가 생성되고 함수에서는 arguments 객체가 생성됨
 *    this를 window or global에 바인딩함
 *    var 변수(let, const는 x)와 함수선언식(함수 표현식, 화살표함수는 x)을 memory heap에 배정하고 기본값을 undefined로 저장함
 *    (호이스팅이 발생하는 이유)
 * 2) Executon Phase
 *    코드를 실행함
 *    필요하다면 새로운 Execution Context를 생성함
 */
