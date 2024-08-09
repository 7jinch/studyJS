/**
 * Using Function to Create Objects
 */
// 생성자 함수 선언
function IdolModel(name, year) {
  // console.log(new.target); // new를 명시하면 new가 실행된 대상이 반환되고, new가 없으면 undefined가 반환됨
  if (!new.target) {
    // 생성자 함수를 실행할 때 new 키워드 없이 실행할 경우
    // 즉 const yuJin2 = IdolModel(`안유진`, 2003); <- 이 코드일 경우
    return new IdolModel(name, year);
    // IdolModel 함수 안에서 IdolModel 오브젝트를 생성해서 반환해주면
    // new 키워드를 잊어버리고 실행되는 일이 없어짐
  }

  this.name = name;
  this.year = year;

  // 메서드도 추가 가능함
  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

// 아래처럼 하면 안 됨
// function IdolModel(name, year) {
//   this.name = name;
//   this.year = year;

//   return {}; <- 오브젝트를 반환해버리면 생성자 함수로 객체를 생성할 수 없게 됨
// }

const yuJin = new IdolModel(`안유진`, 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }

// 생성자 함수 내에서 if(!new.target) 조건을 넣지 않으면 이렇게 나옴
// const yuJin2 = IdolModel(`안유진`, 2003); // new 키워드 없이 함수처럼 사용해서 생성하려고 하면
// console.log(yuJin2); // undefined <- 함수의 반환값이 없기 떄문

// 이제는 new 키워드를 명시하지 않아도 오브젝트 생성이 됨
const yuJin2 = IdolModel(`안유진`, 2003);
console.log(yuJin2); // IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }

// console.log(global.name); // 안유진

/**
 * 화살표 함수
 * Arrow Function
 */
const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

// const yuJin3 = new IdolModelArrow(`안유진`, 2003); // IdolModelArrow is not a constructor 에러 발생

// 생성자 함수가 아니라는 에러가 발생함
// 화살표 함수로는 오브젝트 생성이 불가능함
