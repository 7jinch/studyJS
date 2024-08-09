/**
 * Static Keyword
 *
 * 객체에 귀속되지 않고 클래스에 귀속됨
 * static a는 A자체의 속성이고
 * this.a는 A를 통해 생성한 인스턴스의 속성임
 */
// class UmamusumeModel {
//   name;
//   birth;
//   static team = `팀 스피카`; // static property

//   constructor(name, birth) {
//     this.name = name;
//     this.birth = birth;
//   }

//   // 변수가 아니라 함수도 가능, static method
//   static returnTeam() {
//     return `팀 스피카`;
//   }
// }

// const teio = new UmamusumeModel(`토카이 테이오`, `4/20`);
// console.log(teio);

// console.log(teio.team); // undefined <- 객체에 속하지 않고
// console.log(UmamusumeModel.team); // 팀 스피카 <- 클래스에 귀속됨
// console.log(UmamusumeModel.returnTeam()); // 팀 스피카: new로 객체를 생성하지 않고 사용

/**
 * 유용해 보이지는 않는데 어디에 사용함?
 *
 * Factory Constructor 디자인 패턴
 */
class umamusumeModel {
  name;
  birth;

  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  static fromObject(object) {
    return new umamusumeModel(object.name, object.birth);
  }

  static fromList(list) {
    return new umamusumeModel(list[0], list[1]);
  }
}

// const teio = new umamusumeModel(`토카이 테이오`, `4/20`);
const teio = umamusumeModel.fromObject({
  name: `토카이 테이오`,
  birth: `4/20`,
});
console.log(teio);
// umamusumeModel { name: '토카이 테이오', birth: '4/20' }

const goldShip = umamusumeModel.fromList([`골드 쉽`, `3/6`]);
console.log(goldShip);
// umamusumeModel { name: '골드 쉽', birth: '3/6' }

/**
 * static 메소드는 new를 통해 인스턴스 객체를 생성하지 않아도 된다는 장점이 있기 때문에
 * 인스턴스마다 해당 메소드를 달아줄 필요가 없는 경우에는 static메소드를 이용하여 많이 구현함
 */
