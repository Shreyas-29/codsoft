let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendOperator(operator) {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(displayValue.slice(-1))) {
        // Remove the previous operator before adding the new one
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }

    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal(decimal) {
    if (!displayValue.includes(decimal)) {
        displayValue += decimal;
        updateDisplay();
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = String(result);
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
    }
}
