'use strict';

const calculatorInput = document.querySelector('#calculator-input');
const calculatorKeyboard = document.querySelector('.calculator__panel');
const buttonMathSqrt = document.querySelector('#button-math-sqrt');

let numberFirst;
let numberSecond;
let mathOperation;
let result = '';

function clearInput() {
	numberFirst = '';
	numberSecond = '';
	mathOperation = '';
	result = '';
	return calculatorInput.value = '';
}
function calcMathSqrt() {
	result = Math.sqrt(+calculatorInput.value);
	//console.log('result', result);
	return calculatorInput.value = result;
}
function calcResult() {
	if (mathOperation === '+') {
		result = +numberFirst + +numberSecond;
	}

	if (mathOperation === '-') {
		result = numberFirst - numberSecond;
		//console.log('result', result);
	}

	if (mathOperation === '×') {
		result = numberFirst * numberSecond;
		//console.log('result', result);
	}

	if(mathOperation === '÷') {
		result = numberFirst / numberSecond;
		//console.log('result', result);
	}

	calculatorInput.value = String(result);

	numberFirst = '';
	numberSecond = '';
	mathOperation = '';

	return result;
}
function checkInputValue() {
	if (calculatorInput.value === '' || !isFinite(calculatorInput.value)) {
		alert('Enter a number!');
		calculatorInput.value = '';

		return true;
	}

	return false;
}

/*** Add Event Listener for Keyboard ***/
calculatorKeyboard.addEventListener('click', function(event) {
	let target = event.target;
	/*** Enter Numbers from Calculator Keyboard ***/
	if (target.classList.contains('calculator__button--number')) {
		console.log('target.innerHTML', target.innerHTML);
		if (result != '') {
			calculatorInput.value = target.innerHTML;
			result = '';
		} else {
			calculatorInput.value += target.innerHTML;
		}
	}
	/*** Calculation Math Sqrt ***/
	if (target.classList.contains('calculator__button--math-sqrt')) {
		if(!checkInputValue()) {
			calcMathSqrt();
		}
	}
	/*** Calculate Math Operations ***/
	if (target.classList.contains('calculator__button--math-operation')) {
		if(!checkInputValue()) {
			numberFirst = calculatorInput.value;
			calculatorInput.value = '';
			mathOperation = target.innerHTML;
		}
	}
	/*** Calculate ResultT ***/
	if (target.classList.contains('calculator__button--equal')) {
		if(!checkInputValue()) {
			numberSecond = calculatorInput.value;
			calcResult();
		}	
	}
	/*** Change Number Sign ***/
	if (target.classList.contains('calculator__button--plus-minus')) {
		if(!checkInputValue()) {
			calculatorInput.value = String(-1 * (+calculatorInput.value));
		} 		
	}
	/*** Clear Input by AC-button ***/
	if (target.classList.contains('calculator__button--dropping')) {
		clearInput();
	}
});