/**
 * 변수 선언하기
 *
 * 1) var: 더이상 사용하지 않는 걸 추천
 * 2) let
 * 3) const
 */
var name = `킹 헤일로`;
console.log(name);

let ive = `아이브`;
console.log(ive);

/**
 * var과 let으로 선언한 변수는
 * 나중에 값을 변경할 수 있음
 */

const newJeans = `뉴진스`;
// newJeans = `newJeans` <- const는 값을 변경하지 못 한다.

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 */
var name;
console.log(name);

let gFriend;
console.log(gFriend);

/**
 * let과  var은 선언만 해도 됨
 * undefined로 자동 초기화됨
 */

// const king; <- const는 변수 선언시 반드시 값을 할당해줘야 함
