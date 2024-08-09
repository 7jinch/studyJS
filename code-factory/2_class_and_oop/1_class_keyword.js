/**
 * 클래스는 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀임
 *
 * 대문자로 시작함
 */

// 클래스 정의
class UmamusumeModel {
  // 다른 언어와는 다르게 프로퍼티를 정의하지 않고 생성자 안에서 this 키워드를 사용하기만 해도 됨
  // 하지만 해 주는게 나중에 좋음
  // name = `스페셜 위크`; // 기본값을 줄 수 있음
  // birthDay = `5월 2일`;

  // 생성자(constructor) 정의
  // 함수처럼 매개변수를 받을 수도 있음
  constructor(name, birthDay) {
    this.name = name; // this는 현재의 객체(인스턴스)를 가리킴
    this.birthDay = birthDay;
  }

  // 메서드(클래스의 멤버함수) 정의
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// 인스턴스(객체) 생성
const specialWeek = new UmamusumeModel(`스페셜 위크`, `5월 2일`);
console.log(specialWeek);
// UmamusumeModel { name: '스페셜 위크', birthDay: '5월 2일' }

const elCondorPasa = new UmamusumeModel(`엘 콘도르 파사`, `3월 17일`);
console.log(elCondorPasa);
// UmamusumeModel { name: '엘 콘도르 파사', birthDay: '3월 17일' }

const grassWonder = new UmamusumeModel(`그래스 원더`, `2월 18일`);
console.log(grassWonder);
// UmamusumeModel { name: '그래스 원더', birthDay: '2월 18일' }

console.log(specialWeek.sayName()); // 안녕하세요 저는 스페셜 위크입니다.
console.log(elCondorPasa.sayName()); // 안녕하세요 저는 엘 콘도르 파사입니다.
console.log(grassWonder.sayName()); // 안녕하세요 저는 그래스 원더입니다.

console.log(typeof UmamusumeModel); // function
console.log(typeof specialWeek); // object
