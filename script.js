const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

const calcScreen = document.querySelector('.screen');

const updateScreen = (number) => {
	calcScreen.value = number;
} 

let prevNumber = '';
let calcOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
	if (currentNumber === '0')
	{
		currentNumber = number;
	} 
	else
	{
		currentNumber += number;
	}
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener("click", (event) =>{
		inputOperator(event.target.value)
	});
});

const inputOperator = (operator) => {
	if (calcOperator === '') 
	{
		prevNumber = currentNumber;
	}
	calcOperator = operator;
	currentNumber = '0';
}

const equalSign = document.querySelector('.equal');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '0';
	switch(calcOperator)
	{
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
			break
	}
	currentNumber = result;
	calcOperator = '';
}

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () =>{
	clear();
	updateScreen(currentNumber);
})

const clear = () => {
	prevNumber = '';
	calcOperator = '';
	currentNumber ='0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) 
	{
		return;
	}
	currentNumber += dot;
}

const percent = document.querySelector('.percent');

percent.addEventListener('click', (event) => {
	percentNumber(event.target.value);
	updateScreen(currentNumber);
});

const percentNumber = () => {
	if (currentNumber === '0') 
	{
		return;
	}
	currentNumber = currentNumber / 100;
}