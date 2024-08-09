/**
 * 객체 - Object
 *
 * 객체의 특징
 *
 * 1) const로 선언했을 경우 객체 자체는 변경할 수 없음
 * 2) 하지만 객체 안의 프로퍼티나 메서드는 변경할 수 있음
 */
const specialWeek = {
  name: `스페셜 위크`,
  birth: `5/2`,
  height: 158,
  run: function () {
    // 현재 this는 객체를 가리킴
    return `${this.name}가 달립니다.`;
  },
};

console.log(specialWeek); // { name: '스페셜 위크', birth: '5/2', height: 158, run: [Function: run] }
console.log(specialWeek.run()); // 스페셜 위크가 달립니다.

specialWeek[`height`] = 200;
console.log(specialWeek); // { name: '스페셜 위크', birth: '5/2', height: 200, run: [Function: run] }

specialWeek[`engName`] = `special week`;
console.log(specialWeek);
// {
//   name: '스페셜 위크',
//   birth: '5/2',
//   height: 200,
//   run: [Function: run],
//   engName: 'special week'
// }

/**
 * 객체 프로퍼티 삭제
 */
delete specialWeek[`engName`];
console.log(specialWeek); // { name: '스페셜 위크', birth: '5/2', height: 200, run: [Function: run] }

/**
 * 모든 키값 가져오기
 */
console.log(Object.keys(specialWeek)); // [ 'name', 'birth', 'height', 'run' ]

/**
 * 모든 밸류값 가져오기
 */
console.log(Object.values(specialWeek)); // [ '스페셜 위크', '5/2', 200, [Function: run] ]

/**
 * 빠르게 객체 선언하기
 */
const name = `스페셜 위크`;
const specialWeek2 = {
  name, // 키, 밸류 값이 같으면
  // name: name 이라고 하지 않고 한 번에 적어도 됨
};
console.log(specialWeek2); // { name: '스페셜 위크' }
