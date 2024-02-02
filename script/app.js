import { MathQuestion } from './math-question.js';
import { AppControls } from './app-controls.js';

customElements.define('app-controls', AppControls);
customElements.define('math-question', MathQuestion);

function generate(app, max = 10, count = 25, problemType = 'multiplication') {
  for (let i = 0; i < count; i += 1) {
    const wrapper = document.createElement('li');
    let randomInt = Math.floor(Math.random() * max);

    if (problemType === 'subtraction') {
      randomInt = Math.floor(Math.random() * base);
    }

    const element = new MathQuestion();
    element.base = base;
    element.numberTwo = randomInt;
    element.symbol = symbolMap.get(problemType);
    wrapper.append(element);
    app.append(wrapper);
  }
}

const controls = document.querySelector('app-controls');
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

controls.base = base;
controls.problemType = problemType;
controls.count = count;

generate(app, max, count, problemType);
