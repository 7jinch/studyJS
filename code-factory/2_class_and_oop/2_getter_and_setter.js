/**
 * Getter and Setter
 *
 * getter
 * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
 * 2) private한 값을 반환할 때
 *
 * obj.getter를 사용해 프로퍼티를 읽으려고 할 때 실행됨
 */
class UmamusumeModel {
  name;
  birthday;

  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  // getter 정의
  get nameAndBirthday() {
    return `${this.name} - ${this.birthday}`;
  }

  // setter 정의
  // 보통 바꾸고 싶은 값과 같은 이름을 붙임
  // 무조건 매개변수를 받아야 함
  // 자주 사용은 안 함
  // obj.setter = value로 프로퍼티에 값을 할당하려고 할 때 실행됨
  set name(name) {
    // this.name은 프로퍼티 name
    // name은 매개변수 name
    this.name = name;
  }
}

const specialWeek = new UmamusumeModel(`스페셜 위크`, `5월 2일`);
console.log(specialWeek);
// UmamusumeModel { name: '스페셜 위크', birthday: '5월 2일' }

console.log(specialWeek.nameAndBirthday); // 함수처럼 정의했지만 키처럼 호출함
// 스페셜 위크 - 5월 2일

// console.log(specialWeek.nameAndBirthday()); // 함수처럼 정의했지만 함수 호출처럼 하면 안됨

specialWeek.name = `스페쨩`;
console.log(specialWeek);
// UmamusumeModel { name: '스페쨩', birthday: '5월 2일' }

// private
class UmamusumeModel2 {
  #name; // private: # 붙이기
  birthday;

  constructor(name, birthday) {
    this.#name = name;
    this.birthday = birthday;
  }

  get name() {
    // private 값을 출력할 수 있음
    return this.#name;
  }

  set name(name) {
    // private 값을 출력할 수 있음
    // 하지만 자주 사용 안 하고 사용하지 않는 것을 추천
    this.#name = name;
  }
}

const haruUrara = new UmamusumeModel2(`하루 우라라`, `2월 27일`);
console.log(haruUrara); // UmamusumeModel2 { birthday: '2월 27일' }
console.log(haruUrara.name); // 하루 우라라
