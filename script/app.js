import { MathQuestion } from './math-question.js';

customElements.define('math-question', MathQuestion);

function generate(app, max = 10, count = 25, problemType = 'multiplication') {
  for (let i = 0; i < count; i += 1) {
    const wrapper = document.createElement('div');
    let randomInt = Math.floor(Math.random() * max);

    if (problemType === 'subtraction') {
      randomInt = Math.floor(Math.random() * base);
    }

    const element = new MathQuestion();
    element.base = base;
    element.multiplicand = randomInt;
    element.symbol = symbolMap.get(problemType);
    wrapper.append(element);
    app.append(wrapper);
  }
}

const urlSearchParams = new URLSearchParams(window.location.search);
const app = document.getElementById('app');
const max = 10;
const base = +urlSearchParams.get('base') || Math.floor(Math.random() * max);
const count = +urlSearchParams.get('count') || 25;
const problemType = urlSearchParams.get('type') || 'multiplication';
const symbolMap = new Map([
  ['addition', '➕'],
  ['subtraction', '➖'],
  ['multiplication', '✖️'],
  ['division', '➗']
]);

generate(app, max, count, problemType);
