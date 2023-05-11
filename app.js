const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let array = [];
let digit1 = 0;
let digit2 = 0;
let sign = "";

const add = (a,b) =>{
    return a + b;
}

const substract = (a,b) =>{
    return a - b;
}
const multiply = (a,b) =>{
    return a * b;
}
const divide = (a,b) =>{
    return a / b;
}  

const action = (digit)=>{
    if(parseInt(digit) || parseInt(digit) == 0 || digit == "."){
        
        if(array.length < 16){
            if(array.length < 1){
                if(digit !== "0"){
                    array.push(digit)
                    digit1 = updateDisplay(array);
                }
            }else{
                array.push(digit)
                digit1 = updateDisplay(array);
            }
        }
    }else{
        if(digit === "+" || digit === "-" || digit === "x" || digit === "÷" || digit ==="=" || digit === "%"){
            calculator(digit,array);
        }
        else if(digit === "▶"){
            backSpace(array);
        }
        else if(digit === "AC"){
            clearDisplay();
        }
    }
}

const clearDisplay = () =>{
    array = [];
    digit1 = 0;
    digit2 = 0;
    sign = "";
    result.textContent = "0";
}

const updateDisplay = (digits) =>{

    let numbers = "0";
    if(digits.length > 0){
        if(digits[0] == "."){
            digits.unshift("0");
            console.log(digits)
        }
        numbers = digits.join("");
    }
    result.textContent = numbers;
    return numbers;
}
const backSpace = (array) =>{
    array.pop()
    updateDisplay(array);
}

const convertInt = (numbers)=>{

    if(numbers.length === 0){
        numbers = [0];
    }
    if(numbers[numbers.length -1] ===  "."){
        numbers.pop();
    }
    let digits = numbers.join("");
    return parseInt(digits);
}

const calculator = (sign,array) =>{
    
}

window.onload = () =>{
    clearDisplay();
    btns.forEach(btn => {
        btn.addEventListener('click',function(){
            action(btn.textContent)
        })
    });
}