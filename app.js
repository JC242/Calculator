const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let array = [];
let digit1 = 0;
let digit2 = 0;

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
            array =  calculator(digit,array);
        }
        else if(digit === "▶"){
            array = backSpace(array);
            console.log(array)
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
        }
        numbers = digits.join("");
    }
    result.textContent = numbers;
}
const backSpace = (array) =>{
    if(array[0] == "0" && array[1] == "."){
        array = [];
    }else{
        array.pop()
    }
    updateDisplay(array);
    return array;
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
    
    if(sign == "%"){
        digits = convertInt(array) / 100;
        digits = digits.toString().split("");
        array = digits;
        updateDisplay(array)
    }
    return array;
}

window.onload = () =>{
    clearDisplay();
    btns.forEach(btn => {
        btn.addEventListener('click',function(){
            action(btn.textContent)
        })
    });
}