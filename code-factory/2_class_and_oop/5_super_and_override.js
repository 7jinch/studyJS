/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  // 생성자 오버라이딩하기
  constructor(name, year, part) {
    super(name, year); // <- super는 부모클래스를 가리킴
    this.part = part;
  }

  /**
   * 메서드 오버라이딩하기
   *
   * 함수 안에서 프로퍼티(변수값)를 불러올 때는 super는 사용하면 안 되고 this를 사용해야 함
   * 함수 안에서 함수를 실행할 때는 super를 사용해도 됨
   */
  sayHello() {
    // return `안녕하세요 ${super.name}입니다. ${this.part}를 맡고 입습니다.`; // 이렇게 하면 super.name은 undefined
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 입습니다.`; // 부모클래스랑 겹치는 부분이 존재 -> dry하지 않음
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`; // 부모 메서드 실행
  }
}

const yujin = new FemaleIdolModel(`안유진`, 2003, `보컬`);
console.log(yujin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel(`장원영`, 2002);
console.log(wonYoung.sayHello()); // 안녕하세요 장원영입니다
console.log(yujin.sayHello()); // 안녕하세요 안유진입니다 보컬를 맡고 있습니다.
