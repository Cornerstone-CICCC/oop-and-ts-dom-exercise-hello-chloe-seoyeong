const calculateBtn = document.querySelector('#calculateBtn');
const operationType = document.querySelector('#operation');

class Calculator {
  constructor() {
    this.num1 = document.querySelector('#num1').value;
    this.num2 = document.querySelector('#num2').value;
  }

  add() {
    this.compute(Number(this.num1) + Number(this.num2));
  }

  subtract() {
    this.compute(Number(this.num1) - Number(this.num2));
  }

  multiply() {
    this.compute(Number(this.num1) * Number(this.num2));
  }

  divide() {
    this.compute(Number(this.num1) / Number(this.num2));
  }

  compute(answer) {
    const result = document.querySelector('#result');
    result.innerHTML = answer;
  }
}

calculateBtn.addEventListener('click', () => {
  const opType = operationType.value;

  const simpleCalculator = new Calculator();
  eval(`simpleCalculator.${opType}()`)
})
