

const calculator = {
    displayValue: '',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    secondOperand : null,
};

function updateDisplay() {
    const display = document.querySelector('.screen')
    display.value = calculator.displayValue
}




document.querySelector(".operator1").addEventListener('click', (event) => {
    let target = event.target;
    
    handleOperator(target.value);
    updateDisplay();
    
        

   
});

document.querySelector(".operator3").addEventListener('click', (event) => {
    let target = event.target;
    
    handleOperator(target.value);
    updateDisplay()

   
});

document.querySelector(".operator4").addEventListener('click', (event) => {
    let target = event.target;
    
    handleOperator(target.value);
    updateDisplay()
        

   
});

document.querySelector(".operator2").addEventListener('click', (event) => {
    let target = event.target;
    
    handleOperator(target.value);
    updateDisplay()
        

   
});



document.querySelector(".digit1").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});
    
document.querySelector(".digit2").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit3").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".all-clear").addEventListener('click', (event) => {
    let target = event.target;
       
   
    resetcalculator();
    updateDisplay()
});

document.querySelector(".digit4").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit5").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit6").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit7").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit8").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit9").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".digit0").addEventListener('click', (event) => {
    let target = event.target;
       
    inputDigit(target.value);
    updateDisplay()
});

document.querySelector(".operator5").addEventListener('click', (event) => {
    
    let target = event.target;
       
    inputDigit(target.value);
    
    handleOperator();
    
    updateDisplay()
});

document.querySelector(".operator2").addEventListener('click', (event) => {
    let target = event.target;
    
    
    handleOperator(target.value);
    updateDisplay()
        
    
});

document.querySelector(".decimal").addEventListener('click', (event) => {
    let target = event.target;
    
    
    inputDecimal(target.value);
    updateDisplay();
        
    
});

document.querySelector(".delete").addEventListener('click', (event) => {
    let target = event.target;

    remove();  
    
});


function inputDigit(digit){
    const {displayValue, waitingForSecondOperand} = calculator;

    if (waitingForSecondOperand ===true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }else{
        calculator.displayValue = displayValue === "0" ? digit: displayValue + digit;
        
    }
    
    console.log(calculator);
}

function inputDecimal(dot){

    if (calculator.waitingForSecondOperand === true){
        calculator.displayValue = '0'
        calculator.waitingForSecondOperand =false;
        return
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator){
    const {firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand){
        calculator.operator =nextOperator;
        console.log(calculator);
        return;
    }
    if ((firstOperand === null) && (!isNaN(inputValue)) && (operator === null)){
        calculator.firstOperand = inputValue;
    }else if(operator){
        const {firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);
        const result = calculate(firstOperand, inputValue,operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = result
        
        
    }
    

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    // had a bug below
    if (nextOperator){
        calculator.displayValue += nextOperator;
        return;
    }
    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator){
    if (operator === '+') {
        return firstOperand + secondOperand
    }else if (operator === "-"){
        return firstOperand - secondOperand
    }else if (operator === '*') {
        return firstOperand * secondOperand
    }else if (operator === '/') {
        return firstOperand / secondOperand
    }
    return secondOperand
}


function resetcalculator(){
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function remove() {
    
    var val = document.getElementById("dis").value
    if (val.length > 0) {
        let {displayValue} = calculator
        val = val.substring(0,val.length -1)
        document.getElementById("dis").value = val
        calculator.displayValue = val
    }
       
    console.log(calculator)
    

}