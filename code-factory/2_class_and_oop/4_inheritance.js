/**
 * 상속 - Inheritance
 *
 * 상속은 객체들 간의 관계를 구축하는 방법
 * 슈퍼클래스, 또는 부모클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있음
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolMode extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}
class MaleIdolMode extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yujin = new FemaleIdolMode(`안유진`, 2003);
console.log(yujin); // FemaleIdolMode { name: '안유진', year: 2003 }
console.log(yujin.dance()); // 여자 아이돌이 춤을 춥니다.

const jimin = new MaleIdolMode(`지민`, 1995);
console.log(jimin); // MaleIdolMode { name: '지민', year: 1995 }
console.log(jimin.sing()); // 남자 아이돌이 노래를 부릅니다.

const cf = new IdolModel(`코드팩토리`, 1992);
console.log(cf.name); // 코드팩토리
// console.log(cf.dance()); // 에러

console.log(yujin instanceof IdolModel); // true
console.log(yujin instanceof FemaleIdolMode); // true
console.log(yujin instanceof MaleIdolMode); // false

console.log(cf instanceof IdolModel); // true
console.log(cf instanceof FemaleIdolMode); // false
console.log(cf instanceof MaleIdolMode); // false
