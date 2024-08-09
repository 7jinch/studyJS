/**
 * Prototype
 * 클래스, 생성자 함수
 *
 * Prototype은 DNA다
 *
 * (부모입장)prototype: 자식에게 넘겨줄(보다는 공유에 가까움) 변수, 함수를 정의함
 * (자식입장)__proto__(프로퍼티): 내가 받은 DNA에 접근하기. 부모에세 상속받은 prototype을 참조할 수 있음
 *
 * prototype?
 * 실제 DNA와는 다름: 전달받은 프로퍼티 조작 가능, 변경시 해당 DNA를 갖는 모든 객체의 정보가 변경됨
 * prototype은 null 아니면 객체임
 *
 * __proto__?
 * 명시적으로 선언하지 않아도 자동 할당됨
 * 모든 객체는 __proto__를 통해 자신이 상속받은 prototype 값에 접근 가능함(하지만 prototype의 내부에 직접 접근하는 것은 안 됨)
 * 단방향 체인을 지키기 위해서 __proto__ 프로퍼티를 통해서만 접근 가능
 *
 * 부모 객체.prototype === 자식 객체.__proto__
 * -> 자식은 부모의 prototype을 활용할 수 있음
 * -> .__proto__.proto__... 로 최상위까지 접근 시도함
 * -> 끝까지 없을 경우 변수이면 undefined, 메서드면 TypeError 리턴함
 */
const testObj = {};

console.log(testObj.__proto__); // [Object: null prototype] {}
// 빈 객체를 정의했는데 프로퍼티가 있네
// __proto__ <- 모든 객체에 존재하는 프로퍼티입임
// class 강의의 상속에서 부모 클래스에 해당되는 값임

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // {}
// 정확히 출력해줘: dir
// console.dir(IdolModel.prototype, {
//   showHidden: true,
// });
// {
//   /* <ref *1> {
//   [constructor]: [Function: IdolModel] {
//     [length]: 2,
//     [name]: 'IdolModel',
//     [arguments]: null,
//     [caller]: null,
//     [prototype]: [Circular *1]
//   }
// } */
// }
// constructor라는 key값에 value값으로 IdolModel 함수가 들어가있음

console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true
// 실제로 완전히 동일하고 같은 메모리 주소상에 있다고 봐도 됨
// circular reference: 환형 참조(서로가 서로를 참조하고 있음)

const yuJin = new IdolModel(`안유진`, 2003);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true

/**
 * Prototype Chains
 *
 * yuJin 객체 생성할 때 name 프로퍼티는 안유진, year 프로퍼티는 2003만 만들었는데
 * __proto__프로퍼티도 자동으로 생성됨(부모 클래스의 레퍼런스와 같은 역할을 함)
 *
 * yuJin.__proto__을 IdolModel.prototype과 비교하니 같다고 함
 * yuJin.__proto__ 프로퍼티는 IdolModel.prototype을 가리킴
 *
 * IdolModel.prototype.constructor 프로퍼티는 IdolModel 생성자 함수를 가리킴
 * IdolModel 함수의 prototype 프로퍼티는 IdolModel.prototype을 가리킴
 *
 * yuJin 객체 생성 시 IdolModel에서 new 키워드를 사용해 생성함
 * IdolModel.prototype이 yuJin.__proto__가 됨
 *
 * new 키워드를 사용해 객체 생성시 함수의 prototype 값을 __proto__에 집어넣음
 * 상속 체인에서의 바로 위 역할을 함(__proto__는 상위의 prototype를 가리킴)
 */

console.log(yuJin.__proto__ === IdolModel.prototype); // true
console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true
// IdolModel 생성자 함수 -> Function 함수 -> Object 객체(최상위)
// IdolModel은 Object에서부터 상속받음
// 자식 객체.__proto__는 부모(생성자 함수 또는 클래스 또는 객체 리터럴).prototype을 가리킴
// 부모(생성자 함수 또는 클래스).prototype.constructor는 부모(생성자 함수 또는 클래스) 그 자체를 가리킴

console.log(yuJin.toString()); // [object Object] <- 정의한 적 없는 메서드 존재
console.log(Object.prototype.toString()); // [object Object] <- 여기서 왔네

/**
 * 활용
 */
function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const yuJin2 = new IdolModel2(`안유진`, 2003);
const wonYoung2 = new IdolModel2(`장원영`, 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false
// sayHello 메서드는 서로 다른 메모리 공간에 존재함 -> 리소스 낭비

// 고유의 프로퍼티인지 확인
console.log(yuJin2.hasOwnProperty(`sayHello`)); // true
// 객체 생성시 각각 생성하기 때문에 메모리 낭비
/**
 * yuJin2와 wonYoung2는 IdolModel2 생성자 함수로부터
 * name, year, sayHello 프로퍼티를 상속받고 __proto__ 프로퍼티가 생성되고
 * 각각 다른 메모리 공간에 존재함
 */

// 개선
function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

// 부모(IdolModel3)의 DNA(IdolModel3.property)에 각인시킴
IdolModel3.prototype.sayHello = function () {
  // this도 사용 가능함
  // IdolModel3의 name을 가리킴
  return `${this.name}이 인사함`;
};

const yuJin3 = new IdolModel3(`안유진`, 2003);
const wonYoung3 = new IdolModel3(`장원영`, 2004);

console.log(yuJin3.sayHello()); // 안유진이 인사함
console.log(wonYoung3.sayHello()); // 장원영이 인사함
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true
// sayHello 메서드는 같은 메모리 공간에 있음

// 고유의 프로퍼티인지 확인
console.log(yuJin3.hasOwnProperty(`sayHello`)); // false
// -> 상속받은 프로퍼티임
// 해당 부모(생성자 함수)에게서 상속받은 모든 객체가 사용 가능하지만 메모리는 공유함
/**
 * yuJin3와 wonYoung3는 IdolModel3 생성자 함수로부터
 * name, yaer 프로퍼티만 상속받고 __proto__ 프로퍼티가 생성되고
 * 각각 다른 메모리 공간에 존재함
 * 하지만 sayHello 메서드는 IdolModel3의 DNA(IdolModel3.prototype의 프로퍼티)에 있어서
 * IdolModel3을 상속받은 객체에서도 활용 가능함
 *
 * 즉 부모(생성자 함수 또는 클래스).prototype에 추가한 프로퍼티는 new 키워드를 사용해서 생성된 객체의 고유의 프로퍼티는 아니지만 위 예시처럼 활용할 수 있음
 */

/**
 * static 키워드를 사용한 값은?
 */
IdolModel3.sayStaticHello = function () {
  return `안녕하세요. 저는 정적 메서드 입니다.`;
};
console.log(IdolModel3.sayStaticHello()); // 안녕하세요. 저는 정적 메서드 입니다.

/**
 * 오버라이딩
 */
function IdoleModel4(name, year) {
  this.name = name;
  this.year = year;

  // 오버라이딩
  this.sayHello = function () {
    return `안녕하세요 저는 인스턴스 메서드입니다.`;
  };
}
// 프로토타입에 추가
IdoleModel4.prototype.sayHello = function () {
  return `안녕하세요 저는 prototype 메서드입니다.`;
};

const yuJin4 = new IdoleModel4(`안유진`, 2003);
console.log(yuJin4.sayHello()); // 안녕하세요. 저는 정적 메서드 입니다. -> 안녕하세요 저는 인스턴스 메서드입니다.
// 클래스(오버라이딩)가 나오기 전에는 프로퍼티 셰도잉이라고 불렀음

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
  this.name = name;
  this.yer = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const gaEul = new IdolModel(`가을`, 2004);
const ray = new FemaleIdolModel(`레이`, 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true
console.log(gaEul.__proto__ === Object.getPrototypeOf(gaEul)); // true
// -> getPrototypeOf 함수를 사용하면 해당 객체의 proto를 가져옴

console.log(gaEul.sayHello()); // 가을이 인사를 합니다.
console.log(ray.dance()); // 레이이 춤을 춥니다.
// console.log(ray.sayHello()); // 에러 - ray 객체는 sayHello() 함수가 없고 proto에도 sayHello()는 없음

// 인스턴스의 __proto__ 변경
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true
Object.setPrototypeOf(ray, IdolModel.prototype); // 처음 인자는 객체, 두번째 인자는 바꿀 클래스의 prototype
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(ray.sayHello()); // 레이이 인사를 합니다.

console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
// -> 원래의 prototype과의 연결이 완전히 끊긴 것을 볼 수 있음

// 함수의 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel(`이서`, 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(Object.getPrototypeOf(eSeo) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
console.log(FemaleIdolModel === IdolModel); // false
