const calculateBtn = document.querySelector('#calculateBtn');
const operationType = document.querySelector('#operation');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

class Calculator {
  constructor(num1, num2, operationType) {
    this.num1 = num1;
    this.num2 = num2;
    this.operationType = operationType;
  }

  add() {
    return Number(this.num1) + Number(this.num2);
  }

  subtract() {
    return Number(this.num1) - Number(this.num2);
  }

  multiply() {
    return Number(this.num1) * Number(this.num2);
  }

  divide() {
    return Number(this.num1) / Number(this.num2);
  }

  render() {
    const result = document.querySelector('#result');
    if(this.operationType == 'add') {
      result.innerHTML = this.add();
    } else if(this.operationType == 'subtract') {
      result.innerHTML = this.subtract();
    } else if(this.operationType == 'multiply') {
      result.innerHTML = this.multiply();
    } else if(this.operationType == 'divide') {
      result.innerHTML = this.divide();
    }
  }
}

calculateBtn.addEventListener('click', () => {
  const opType = operationType.value;
  const number1 = num1.value;
  const number2 = num2.value;

  const simpleCalculator = new Calculator(number1, number2, opType);
  simpleCalculator.render();
})
