function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function operate(operator) {
    var display = document.getElementById('display');
    var currentValue = display.value;
    if (currentValue !== '' && !isNaN(currentValue[currentValue.length - 1])) {
        display.value += operator;
    }
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
}

document.addEventListener('keydown', function(event) {
    var key = event.key;

    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Shift') {
        ;
    }
    else{
        alert("Enter A Valid Input")
    }
});