document.querySelectorAll('.digits, .operation')
    .forEach(el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}
document.querySelector('.square')
    .addEventListener('click', getSquare);

function getSquare() {
    const display = document.querySelector('.display');
    display.value = Math.sqrt(display.value);
}
document.querySelector('.sqrt')
    .addEventListener('click', getSqrt);

function getSqrt() {
    const display = document.querySelector('.display');
    display.value *= display.value;
}

document.querySelector('.equal')
    .addEventListener('click', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
document.querySelector('.reset')
    .addEventListener('click', resetBtn);

function resetBtn() {
    const display = document.querySelector('.display');
    display.value = "";
}
document.querySelector('.exp')
    .addEventListener('click', expNumber);

function expNumber() {
    const display = document.querySelector('.display');
    display.value = Math.exp(display.value);
}
