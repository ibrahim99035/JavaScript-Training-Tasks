let currentInput = '0';
let previousInput = '0';
let operator = null;
const clearButton = document.getElementById('clear');

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

document.querySelectorAll('.buttons button:not(.operator, .equals)').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = button.innerText;
        } else {
            currentInput += button.innerText;
        }
        updateDisplay();
    });
});

document.querySelectorAll('.operator').forEach(opButton => {
    opButton.addEventListener('click', () => {
        operator = opButton.innerText;
        previousInput = currentInput;
        currentInput = '0';
        updateDisplay();
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    if (operator && previousInput !== '0' && currentInput !== '0') {
        switch (operator) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                if (currentInput !== '0') {
                    currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
        }
        operator = null;
        previousInput = '0';
        updateDisplay();
    }
});

clearButton.addEventListener('click',() => {
    currentInput = '0';
    updateDisplay();
});