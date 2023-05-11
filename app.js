const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let array = []
let digit1 = "";
let digit2 = "";
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
            array.push(digit)
            digit1 = updateDisplay(array);
        }
    }else{
        if(digit === "+" || digit === "-" || digit === "x" || digit === "÷"){
            calculator(sign);
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
    result.textContent = 0;
}

const updateDisplay = (digits) =>{

    let numbers = "0"
    if(digits.length > 0){
        numbers = digits.join("")
    }
    console.log(numbers)
    result.textContent = numbers;
    return numbers
}
const backSpace = (array) =>{
    array.pop()
    updateDisplay(array);
}

const calculator = (sign) =>{

}

window.onload = () =>{
    btns.forEach(btn => {
        btn.addEventListener('click',function(){
            action(btn.textContent)
        })
    });
}