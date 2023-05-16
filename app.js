const btnsNums = document.querySelectorAll(".num");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDiv = document.querySelector(".div");
const btnDel = document.querySelector(".delete");
const btnAC = document.querySelector(".erase");
const btnNeg = document.querySelector(".negative");
const btnEnter = document.querySelector(".enter");

let array = ["0"];
let arrayBuffer = ['a','b','c','d'];
let countArray = [];

const updateArray = (digit)=>{

    if(array.length < 16){
        if(array[0] == "0" && array.length == 1){
            if(digit != 0){
                array.pop();
                array.push(digit);
            }
        }else{
            array.push(digit);
        }
       
    }
    updateDisplay(array);
    return array;
}   

const updateDisplay = (array)=>{
    let numbers = "0";
    while(array.length > 16){
        array.pop();
    }
    if(array.length > 0){
        if(array[0] == "."){
            array.unshift("0");
        }
        numbers = array.join("");
    }
    result.textContent = numbers;
    return array;
}

const updateDisplayCount = ()=>{

}

const deleteNum = (array) =>{
    array.pop();
    if(array.length == 0){
        array = ["0"];
    }
    updateDisplay(array);
    return array; 
}

const clearDisplay = (array,arrayBuffer) =>{
    array = ["0"];
    arrayBuffer = ['a','b','c','d'];
    updateDisplay(array);
    return [array,arrayBuffer];
}

const addNegative = () =>{
    nums = result.textContent;
    if(nums !== "0"){
        nums = nums.split("");

        if(nums[0] !== "-"){
            nums.unshift("-");
        }else{
            nums.shift();
        }
        numbers = nums.join("");
        numbers = parseFloat(numbers);
        numbers = numbers.toString().split("");
        updateDisplay(numbers);
        console.log(numbers)
        return numbers;
    }
}

const updateBuffer = (digit,array,arrayBuffer,operation) =>{
    console.log(arrayBuffer);
    if(operation != "="){
        arrayBuffer[3] = operation;
    }
    if(Number.isNaN(digit) == false || operation == "="){
        if(arrayBuffer[0] == "a"){
            arrayBuffer[0] = digit;
            arrayBuffer[2] = arrayBuffer[0];
        }else{
            if(Number.isNaN(digit) == false){
                arrayBuffer[1] = digit;
            }else{
                arrayBuffer[1] = arrayBuffer[2];
            }
            clearDisplay();
        }
        console.log(arrayBuffer);
        if(arrayBuffer[0] !== 'a' && arrayBuffer[1] !== 'b' || operation == "="){
            if(operation == "+" || arrayBuffer[3] == "+"){
                arrayBuffer[0] = arrayBuffer[0] + arrayBuffer[1];
            }else if(operation == "-"  || arrayBuffer[3] == "-"){
                arrayBuffer[0] = arrayBuffer[0] - arrayBuffer[1];
            }else if(operation == "x"  || arrayBuffer[3] == "x"){
                arrayBuffer[0] = arrayBuffer[0] * arrayBuffer[1];
            }else if(operation == "÷"  || arrayBuffer[3] == "÷"){
                arrayBuffer[0] = arrayBuffer[0] / arrayBuffer[1];
            }
            updateDisplay(arrayBuffer[0].toString().split(""));
            console.log(arrayBuffer);
            arrayBuffer[2] = arrayBuffer[1];
            arrayBuffer[1] = 'b';
            console.log(arrayBuffer);
        }
        return [array = [] , arrayBuffer];
    }
    return [array, arrayBuffer];
}

const operation = (array,arrayBuffer,sign) =>{
    num = parseFloat(array.join(""));
    [array, arrayBuffer] = updateBuffer(num,array,arrayBuffer,sign);

    return [array , arrayBuffer];
}
    
window.onload = () =>{
   btnsNums.forEach(num => {
       num.addEventListener("click",function(e){
            array = updateArray(num.textContent);
       });
   });
   btnDel.addEventListener("click",function(e){
        array = deleteNum(array);
   });
   btnAC.addEventListener("click",function(e){
        [array,arrayBuffer] = clearDisplay(array,arrayBuffer);
   });
   btnNeg.addEventListener("click",function(e){
       array = addNegative();
   });
   btnAdd.addEventListener("click",function(e){
        [array,arrayBuffer] = operation(array,arrayBuffer,btnAdd.textContent);
   });
   btnSub.addEventListener("click",function(e){
        [array,arrayBuffer] = operation(array,arrayBuffer,btnSub.textContent);
   });
   btnMult.addEventListener("click",function(e){
        [array,arrayBuffer] = operation(array,arrayBuffer,btnMult.textContent);
   });
   btnDiv.addEventListener("click",function(e){
        [array,arrayBuffer] = operation(array,arrayBuffer,btnDiv.textContent);
    });
   btnEnter.addEventListener("click",function(e){
        [array,arrayBuffer] = operation(array,arrayBuffer,btnEnter.textContent);
   });   
}