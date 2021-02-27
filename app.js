const container = document.querySelector('.container');
let input = document.querySelector('#num');
let cadenaNum = '';
let op;
let resultado;
let arrayNum = [];

class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sumar() {
        return this.num1 + this.num2;
    }
    restar() {
        return this.num1 - this.num2;
    }
    dividir() {
        return this.num1 / this.num2;
    }
    multiplicar() {
        return this.num1 * this.num2;
    }
}

container.addEventListener('click', (e) => {
    if (e.target.id === '1') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '2') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '3') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '4') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '5') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '6') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '7') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '8') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === '9') {
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === 'sum') {
        op = '+';
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === 'res') {
        op = '-';
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === 'mul') {
        op = 'x';
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === 'div') {
        op = '/';
        cadenaNum += e.target.textContent;
        input.value = cadenaNum;
    }
    if (e.target.id === 'exp') {
        let exponer = input.value;
        input.value = parseInt(Math.pow(exponer, 2));
    }
    if (e.target.id === 'operar') {
        calcularNum();
    }

})

function calcularNum() {
    arrayNum = [...cadenaNum];
    let num1;
    let num2;
    const found = arrayNum.findIndex(f => {
        if (f === '+') {
            return f;
        }
        if (f === 'x') {
            return f;
        }
        if (f === '-') {
            return f;
        }
        if (f === '/') {
            return f;
        }
    })
    num1 = parseInt(arrayNum.slice(0, found).join(''));
    num2 = parseInt(arrayNum.slice(found + 1, arrayNum.length).join(''));

    const calculator = new Calculadora(num1, num2);
    if (op === '+') {
        resultado = calculator.sumar();
        cadenaNum = '';
        input.value = resultado;
    }
    if (op === '-') {
        resultado = calculator.restar();
        cadenaNum = '';
        input.value = resultado;
    }
    if (op === '/') {
        resultado = calculator.dividir();
        cadenaNum = '';
        input.value = resultado;
    }
    if (op === 'x') {
        resultado = calculator.multiplicar();
        cadenaNum = '';
        input.value = resultado;
    }
}

