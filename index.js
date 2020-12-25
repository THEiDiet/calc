let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');

let getNumber1 = () => {
  return Number(number1.value);
}
let getNumber2 = () => {
  return Number(number2.value);
}

let makeOperation = (operationCode) => {
  let result;
  if (operationCode === '+') {
    result = getNumber1() + getNumber2();
  } else if (operationCode === '-') {
    result = getNumber1() - getNumber2();
  } else if (operationCode === '*') {
    result = getNumber1() * getNumber2();
  } else if (operationCode === '/') {
    result = getNumber1() / getNumber2();
  } else {
    alert('expression is unknown')
  }
  alert(result);
}

let onButtonClick = (eventObject) => {
  let clickedElem = eventObject.currentTarget;
  let operation = clickedElem.innerHTML;
  makeOperation(operation);
}


plus.addEventListener('click', onButtonClick);
minus.addEventListener('click', onButtonClick);
multiply.addEventListener('click', onButtonClick);
divide.addEventListener('click', onButtonClick);