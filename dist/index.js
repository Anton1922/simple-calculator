'use strict';

var calculatorInput = document.querySelector('#calculator-input');
var calculatorKeyboard = document.querySelector('.calculator__panel');
var buttonMathSqrt = document.querySelector('#button-math-sqrt');
var numberFirst;
var numberSecond;
var mathOperation;
var result = '';

function clearInput() {
  numberFirst = '';
  numberSecond = '';
  mathOperation = '';
  result = '';
  return calculatorInput.value = '';
}

function calcMathSqrt() {
  result = Math.sqrt(+calculatorInput.value); //console.log('result', result);

  return calculatorInput.value = result;
}

function calcResult() {
  if (mathOperation === '+') {
    result = +numberFirst + +numberSecond;
  }

  if (mathOperation === '-') {
    result = numberFirst - numberSecond; //console.log('result', result);
  }

  if (mathOperation === '×') {
    result = numberFirst * numberSecond; //console.log('result', result);
  }

  if (mathOperation === '÷') {
    result = numberFirst / numberSecond; //console.log('result', result);
  }

  calculatorInput.value = String(result);
  numberFirst = '';
  numberSecond = '';
  mathOperation = '';
  return result;
}
/*** Add Event Listener for Keyboard ***/


calculatorKeyboard.addEventListener('click', function (event) {
  var target = event.target;
  /*** Enter Numbers from Calculator Keyboard ***/

  if (target.classList.contains('calculator__button--number')) {
    console.log('target.innerHTML', target.innerHTML);

    if (result != '') {
      calculatorInput.value = target.innerHTML; //console.log('result', result);

      result = ''; //console.log('result', result);
    } else {
      calculatorInput.value += target.innerHTML;
    }
  }
  /*** Calculation Math Sqrt ***/


  if (target.classList.contains('calculator__button--math-sqrt')) {
    if (calculatorInput.value === '') {
      alert('Enter a number!');
    }

    calcMathSqrt();
  }
  /*** Calculate Math Operations ***/


  if (target.classList.contains('calculator__button--math-operation')) {
    if (calculatorInput.value === '') {
      alert('Enter a number!');
    }

    numberFirst = calculatorInput.value; //console.log('numberFirst', numberFirst);

    calculatorInput.value = '';
    mathOperation = target.innerHTML; //console.log('mathOperation', mathOperation);
  }
  /*** Calculate ResultT ***/


  if (target.classList.contains('calculator__button--equal')) {
    //console.log('result', result);
    numberSecond = calculatorInput.value; //console.log('numberSecond', numberSecond);

    calcResult();
  }
  /*** Change Number Sign ***/


  if (target.classList.contains('calculator__button--plus-minus')) {
    if (calculatorInput.value === '') {
      alert('Enter a number!');
    }

    calculatorInput.value = String(-1 * +calculatorInput.value);
  }
  /*** Clear Input by AC-button ***/


  if (target.classList.contains('calculator__button--dropping')) {
    clearInput();
  }
});
//# sourceMappingURL=index.js.map
