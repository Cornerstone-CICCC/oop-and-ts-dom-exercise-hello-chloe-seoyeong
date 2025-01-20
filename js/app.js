const calculateBtn = document.querySelector('#calculateBtn');
const operationType = document.querySelector('#operation');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    // this.operationType = operationType;
  }

  add() {
    this.render(Number(this.num1) + Number(this.num2));
  }

  subtract() {
    this.render(Number(this.num1) - Number(this.num2));
  }

  multiply() {
    this.render(Number(this.num1) * Number(this.num2));
  }

  divide() {
    this.render(Number(this.num1) / Number(this.num2));
  }

  render(answer) {
    const result = document.querySelector('#result');
    result.innerHTML = answer;
  }
}

calculateBtn.addEventListener('click', () => {
  const opType = operationType.value;
  const number1 = num1.value;
  const number2 = num2.value;

  const simpleCalculator = new Calculator(number1, number2);
  // simpleCalculator.render();
  eval(`simpleCalculator.${opType}()`)
})
