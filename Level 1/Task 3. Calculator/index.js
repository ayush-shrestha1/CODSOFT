const display = document.getElementById("display")
let isOpeningParenthesis = true;

function appendToDisplay(input) {
    display.value += input;
    adjustDisplay();
}

function clearDisplay() {
    display.value = "";
    adjustDisplay();
}

function clearOneDisplay() {
    if (display && display.value.length > 0) {
        display.value = display.value.slice(0, -1);
        adjustDisplay();
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
        adjustDisplay();
    }
    catch (error) {
        display.value = "Error";
        adjustDisplay();
    }
}


function adjustDisplay() {
    display.scrollLeft = display.scrollWidth;
}