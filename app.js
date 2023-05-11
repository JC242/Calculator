const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDiv = document.querySelector(".div");

let array = [];
let num = "";
let nums = ["a","b"];

const add = (a,b) =>{
    c = a + b;
    return c;
}

const substract = (a,b) =>{
    c = a - b;
    return c;
}
const multiply = (a,b) =>{
    c = a * b;
    return c;
}
const divide = (a,b) =>{
    c = a / b;
    return c;
}  

const action = (digit) =>{
   
    if(parseInt(digit) || parseInt(digit) == 0 || digit == "."){
        
        if(array.length < 16){
            if(array.length < 1){
                if(digit !== "0"){
                    
                    btnAdd.classList.remove("sign");
                    btnDiv.classList.remove("sign");
                    btnMult.classList.remove("sign");
                    btnSub.classList.remove("sign");

                    array.push(digit)
                    digit1 = updateDisplay(array);
                }
            }else{
                array.push(digit)
                digit1 = updateDisplay(array);
            }
        }
    }else{
        if(digit === "+" || digit === "-" || digit === "x" || digit === "÷" || digit ==="=" || digit === "%" || digit === "AC"){
            
            if(digit === "+"){
                if(btnAdd.classList.contains("sign")){
                    btnAdd.classList.remove("sign");
                }else{
                    btnAdd.classList.add("sign");
                    btnDiv.classList.remove("sign");
                    btnMult.classList.remove("sign");
                    btnSub.classList.remove("sign");
                }
            }else if(digit === "-"){
                if(btnSub.classList.contains("sign")){
                    btnSub.classList.remove("sign");
                }else{
                    btnAdd.classList.remove("sign");
                    btnDiv.classList.remove("sign");
                    btnMult.classList.remove("sign");
                    btnSub.classList.add("sign");
                }      
            }else if(digit === "x"){
                if(btnMult.classList.contains("sign")){
                    btnMult.classList.remove("sign");
                }else{
                    btnAdd.classList.remove("sign");
                    btnDiv.classList.remove("sign");
                    btnMult.classList.add("sign");
                    btnSub.classList.remove("sign");
                }
            }else if(digit === "÷"){
                if(btnDiv.classList.contains("sign")){
                    btnDiv.classList.remove("sign");
                }else{
                    btnAdd.classList.remove("sign");
                    btnDiv.classList.add("sign");
                    btnMult.classList.remove("sign");
                    btnSub.classList.remove("sign");
                }
            }
            //array =  calculator(digit,array);
        }
        else if(digit === "▶"){
            array = backSpace(array);
        }
    }
}

const clearDisplay = () =>{
    array = [];
    result.textContent = "0";
    return array;
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

const convertInt = (numbers) =>{

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
    console.log(sign);
    if(sign == "+" || sign == "-" || sign == "x" || sign == "÷" ){
        
        num = parseFloat(array.join(""));
        if(nums[0] == "a"){
            nums[0] = num;
            array = [];
        }else{
            nums[1] = num;
            array = clearDisplay();
        }

        if(nums[0] !== "a" && nums[1] !== "b"){

            if(sign == "+"){
                nums[0] = add(nums[0],nums[1]);
            }
            if(sign == "-"){
                nums[0] = substract(nums[0],nums[1]);
            }
            sign = "";

            updateDisplay(nums[0].toString().split(""))
        }
        console.log(nums);
    }

    if(sign == "%"){
        digits = convertInt(array) / 100;
        digits = digits.toString().split("");
        array = digits;
        updateDisplay(array)
    }
    if(sign == "AC"){
        nums = ["a","b"]
        array = clearDisplay();
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