/**
 * Immutable Object
 */
const yuJin = {
  name: `안유진`,
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);
// { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * extensible
 *
 * 확장 가능 여부(값 추가 가능 여부)
 */
console.log(Object.isExtensible(yuJin)); // 기본값은 true

yuJin.position = `vocal`;
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

Object.preventExtensions(yuJin); // extensible을 false로 변경
console.log(Object.isExtensible(yuJin)); // false

yuJin.groupName = `ive`;
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }
// groupName 속성이 생성되지 않은 것을 볼 수 있음

delete yuJin.position; // 삭제는 가능함
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * seal
 */
const yuJin2 = {
  name: `안유진`,
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isSealed(yuJin2)); // 기본값은 false
Object.seal(yuJin2); // true로 변경
console.log(Object.isSealed(yuJin2)); // true

yuJin2.groupName = `ive`;
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }
// groupName 프로퍼티가 추가가 안 됨

delete yuJin2.name; // 삭제도 안 됨
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }

// 값 변경은 가능
// 사실 sell은 프로퍼티 속성값 중
// configurable을 false로, writable을 true로 만드는 거임
Object.defineProperty(yuJin2, `name`, {
  value: `김유진`,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, `name`)); // { value: '김유진', writable: true, enumerable: true, configurable: false }

/**
 * freezed
 *
 * 읽기 외 모든 작업을 불가능 하게 만듬
 */
const yuJin3 = {
  name: `안유진`,
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(yuJin3)); // 기본값은 false
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3.groupName = `ive`;
console.log(yuJin3); // { name: '안유진', year: 2003, age: [Getter/Setter] }
// 추가 불가능

delete yuJin3.name;
console.log(yuJin3); // { name: '안유진', year: 2003, age: [Getter/Setter] }
// 삭제 불가능

console.log(Object.getOwnPropertyDescriptor(yuJin3, `name`));
// {
//   value: '안유진', <-
//   writable: false,
//   enumerable: true, <-
//   configurable: false
// }
// 읽기, 열거 제외 하고는 모든 작업이 불가능함
// 추가, 변경, 삭제 불가능

const yuJin4 = {
  name: `안유진`,
  year: 2003,
  wonYoung: {
    name: `장원영`,
    year: 2002,
  },
};
Object.freeze(yuJin4); // 상위 오브젝트에 freeze를 걸면 하위 오브젝트도 freeze가 될까?
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4.wonYoung)); // false

// 되지 않음
// extensible, seal, freeze 모두 상위 오브젝트에 적용한다고 하더라도
// 하위 오브젝트에까지 적용되지는 않음
