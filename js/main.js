let calculator = document.querySelector('.calculator')
keys = calculator.querySelectorAll('.calculator-keys')
let display = calculator.querySelector('.calculator-display')
let eq = "";
c = 0;

for (item of keys) {
    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;


        if (buttonText == '=') {
            display.textContent = calc(eq);
            c++;
            eq=""
            if (c >= 2) {
                display.textContent = 0;
            }
        }
        else if (buttonText == 'C') {
            eq = "";
            display.textContent = 0;
            c = 0;
        }
        else {
            if (buttonText.length != 33) {
                eq += buttonText;
                display.textContent = eq;
                c = 0;
            }
        }

        if (eq.length>15){
            display.textContent = "Too Long!";
            eq = ""
        }
    });
}

function calc(eq) {
    eq = eq.replace('×', '*');
    eq = eq.replace('÷', '/');
    try {
        return eval(eq).toString().substring(0, 15);
    }
    catch (err) {
        return "Invalid Equation!";
    }
}