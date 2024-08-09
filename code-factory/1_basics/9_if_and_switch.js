/**
 * If and Switch
 */
let num = 5;

if (num % 2 === 0) {
  console.log(`짝수다`);
} else {
  console.log(`홀수다`);
}

if (num % 2 === 0) {
  console.log(`2의 배수다`);
} else if (num % 3 === 0) {
  console.log(`3의 배수다`);
} else {
  console.log(`2, 3의 배수가 아님`);
}

const week = `sunday`;
let korWeek;

switch (week) {
  case `monday`:
    korWeek = `월요일`;
    break;
  case `tuesday`:
    korWeek = `화요일`;
    break;
  case `wednesday`:
    korWeek = `수요일`;
    break;
  case `thursday`:
    korWeek = `목요일`;
    break;
  case `friday`:
    korWeek = `금요일`;
    break;
  case `saturday`:
    korWeek = `토요일`;
    break;
  default:
    korWeek = `일요일`;
    break;
}

console.log(korWeek); // 일요일
