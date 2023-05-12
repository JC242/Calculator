const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDiv = document.querySelector(".div");

let array = ["0"];
let num = "";
let nums = ["a","b"];
let signbuffer = "";

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
            if(array[0] == "0"){
                if(digit !== "0"){
                    array.pop();
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

                        btnAdd.classList.add("sign");
                        btnDiv.classList.remove("sign");
                        btnMult.classList.remove("sign");
                        btnSub.classList.remove("sign");
                        
                    }else if(digit === "-"){
                    
                        btnAdd.classList.remove("sign");
                        btnDiv.classList.remove("sign");
                        btnMult.classList.remove("sign");
                        btnSub.classList.add("sign");
                            
                    }else if(digit === "x"){

                        btnAdd.classList.remove("sign");
                        btnDiv.classList.remove("sign");
                        btnMult.classList.add("sign");
                        btnSub.classList.remove("sign");

                    }else if(digit === "÷"){

                        btnAdd.classList.remove("sign");
                        btnDiv.classList.add("sign");
                        btnMult.classList.remove("sign");
                        btnSub.classList.remove("sign");
                    }
                    array =  calculator(digit,array);
        
        }
        else if(digit === "▶"){
            array = backSpace(array);
        }
    }
    console.log(array);
}

const calculator = (sign,array) =>{
    
    if(sign == "+" || sign == "-" || sign == "x" || sign == "÷" || sign == "="){
       
                num = parseFloat(array.join(""));
                console.log(num)
                if(nums[0] == "a"){
                    nums[0] = num;
                }else{
                    nums[1] = num;
                    array = clearDisplay();
                }
                if(sign !== "="){
                    signbuffer = sign;
                }
            console.log(signbuffer)
            console.log(nums);
            console.log(sign)
            if((nums[0] !== "a") && (nums[1] !== "b")){
                    if(sign == "+" || signbuffer == "+"){
                        nums[0] = add(nums[0],nums[1]);
                    }
                    if(sign == "-" || signbuffer == "-"){
                        
                        nums[0] = substract(nums[0],nums[1]);
                    }
                    if(sign == "x" || signbuffer == "x"){
                        
                        nums[0] = multiply(nums[0],nums[1]);
                    }
                    if(sign == "÷" || signbuffer == "÷"){
                        
                        nums[0] = divide(nums[0],nums[1]);
                    }
                    nums[1] = "b";
                    console.log(nums);
                    updateDisplay(nums[0].toString().split(""))
            }
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
    nums[1] = "b";
    return array = ["0"];
}

const clearDisplay = () =>{

    array = ["0"];
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
        array = ["0"];
    }else if(array[0] !== "0" && array.length >=1){
        if(array.length > 1){
            array.pop();
        }else{
            array = ["0"]
        }
    }else{
        array = ["0"];
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

window.onload = () =>{
    clearDisplay();
    btns.forEach(btn => {
        btn.addEventListener('click',function(){
            action(btn.textContent)
        })
    });
}