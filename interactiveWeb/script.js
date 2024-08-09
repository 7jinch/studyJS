const input = document.querySelectorAll(`input`);
const button = document.querySelector(`button`);
const span = document.querySelector(`span`);

input.forEach((element, index) => {
  element.value = Math.floor(Math.random() * 100000000 + 1);
});

const plus = (x, y) => {
  const answer = x + y;
  return answer;
};
const rightAnswer = plus(Number(input[0].value), Number(input[1].value));

span.innerText = `답은 ${rightAnswer}`;

function sum(x, y) {
  const answer = x + y;
  return answer;
}
