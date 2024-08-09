/**
 * Property Attribute
 *
 * Property? 객체의 값
 * Attribute? 프로퍼티의 속성
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적인 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지는 않고
 *                  다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                  ex) getter, setter
 */
const yuJin = {
  name: `안유진`,
  year: 2003,
};

/**
 * 대문자로 시작 -> 클래스 or 생성자 함수
 * 클래스나 생성자 함수에서 바로 호출 가능한 거 -> static 메서드
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, `name`)); // 처음 인자는 프로퍼티 속성을 알고 싶은 객체, 두번째 인자는 정보를 가져올 키값
// { value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yuJin, `year`));
// { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값 수정 가능 여부
 * 3) enumerable - 열거 가능 여부
 *                 for...in 루프 등을 사용할 수 있으면 true를 반환함
 *
 * 4) configurable - 프로퍼티 속성의 재정의 가능 여부
 *                   false일 경우 프로퍼티 삭제나 속성 변경이 금지됨
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능
 */
console.log(Object.getOwnPropertyDescriptors(yuJin));
// {
//   name: {
//     value: '안유진',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   year: { value: 2003, writable: true, enumerable: true, configurable: true }
// }

const yuJin2 = {
  name: `안유진`,
  year: 2003,

  // 엑세서 프로퍼티 선언
  get age() {
    // 현재 연도: new Date().getFullYear()
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age); // 21
console.log(yuJin2.year); // 2003

yuJin2.age = 32;
console.log(yuJin2.age); // 32
console.log(yuJin2.year); // 1992
// obj.getter -> 프로퍼티를 읽으려고 할 때 실행됨
// obj.setter -> 프로퍼티에 값을 할당하려 할 때 실행됨

// 엑세서 프로퍼티(getter와 setter)의 프로퍼티 속성을 출력해보기
console.log(Object.getOwnPropertyDescriptor(yuJin2, `age`));
// {
//   get: [Function: get age], <- value라는 프로퍼티 속성은 없음
//   set: [Function: set age], <- 실제 getter, setter 프로퍼티를 가리킴
//   enumerable: true,
//   configurable: true
// }

/**
 * 프로퍼티 속성 재정의 해보기
 *
 * 속성을 직접 재정의 할 수 있음
 */
// yuJin2[`height`] = 172;
// console.log(yuJin2); // { name: '안유진', year: 1992, age: [Getter/Setter], height: 172 }
// console.log(Object.getOwnPropertyDescriptor(yuJin2, `height`)); // { value: 172, writable: true, enumerable: true, configurable: true }

Object.defineProperty(yuJin2, `height`, {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
  // value 이외의 값을 입력하지 않으면 false
});
console.log(yuJin2); // { name: '안유진', year: 1992, age: [Getter/Setter], height: 172 }

yuJin2.height = 180;
console.log(yuJin2); // { name: '안유진', year: 1992, age: [Getter/Setter], height: 180 }

/**
 * writable을 false로 변경하면
 */
Object.defineProperty(yuJin2, `height`, {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, `height`)); // { value: 180, writable: false, enumerable: true, configurable: true }
yuJin2.height = 172; // 값을 변경해도 변경의 되지 않음
console.log(yuJin2); // { name: '안유진', year: 1992, age: [Getter/Setter], height: 180 }

/**
 * enumerable
 */
console.log(Object.keys(yuJin2)); // [ 'name', 'year', 'age', 'height' ]
for (let key in yuJin2) {
  console.log(key);
}
// name
// year
// age
// height
// -> enumerable이 true이기 때문에 가능
// 그럼 enumerable을 false로 하면
Object.defineProperty(yuJin2, `name`, {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, `name`)); // { value: '안유진', writable: true, enumerable: false, configurable: true }

console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height' ]
console.log(yuJin2); // { year: 1992, age: [Getter/Setter], height: 180 }
// -> name이 출력되지 않음. 하지만 값은 존재함

console.log(yuJin2.name); // 안유진

/**
 * configurable
 */
Object.defineProperty(yuJin2, `height`, {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, `height`)); // { value: 180, writable: false, enumerable: true, configurable: false }

// configurable이 false인 상태로 enumerable을 변경하려고 하면
// Object.defineProperty(yuJin2, `height`, {
//   enumerable: false,
// });
// Cannot redefine property: height 에러 발생

// writable이 true라면 값 변경과 writable을 변경하는 건 가능
Object.defineProperty(yuJin2, `height`, {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, `height`)); // { value: 172, writable: true, enumerable: true, configurable: false }

// 하지만 writable을 false로 바꾸고 다른 속성값을 바꾸려고 하면 위의 경우처럼 에러 발생함
/**
 * configurable이 false인 상태 && writable이 true인 상태  -> 값 변경 가능, writable을 false로 변경 가능
 * configurable이 false인 상태 && writable이 false인 상태 -> 변경 불가능
 */
