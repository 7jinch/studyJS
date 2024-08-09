/**
 * All About Object
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - {}
 * 2) class를 인스턴스화 해서 성성 - class와 OOP
 * 3) function을 사용해서 생성 - 생성자 함수
 */
// 1번 방법
const yuJin = {
  name: `안유진`,
  year: 2003,
};
console.log(yuJin); // { name: '안유진', year: 2003 }

// 2번 방법
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
console.log(new IdolModel(`안유진`, 2003)); // IdolModel { name: '안유진', year: 2003 }

/**
 * 3번 방법: 생성자함수
 * 클래스 선언처럼 첫번째 글자는 대문자로 하는 게 약속임
 *
 * 함수에는 생성자가 없어서 선언부터 파라미터로 정의해줘야 함
 * 함수 내부에서도 this 키워드를 사용할 수 있고 this가 있다면 객체 생성 가능
 * 객체 생성시 클래스처럼 new 키워드를 사용해서 객체를 생성할 수 있음
 */
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}
const gaEul = new IdolFunction(`가을`, 2002);
console.log(gaEul); // IdolFunction { name: '가을', year: 2002 }

/**
 * 위 3가지 방법 모두 객체를 반환함
 */
