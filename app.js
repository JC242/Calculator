const btnsNums = document.querySelectorAll(".num");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDiv = document.querySelector(".div");
const btnDel = document.querySelector(".delete");
const btnAC = document.querySelector(".erase");
const btnPorc= document.querySelector(".porcentage");
const btnEnter = document.querySelector(".enter");

let array = ["0"];
let arrayBuffer = ['a','b','c','d'];

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
    console.log("update");
    console.log(array);
    updateDisplay(array);
    return array;
}   

const updateDisplay = (array)=>{
    let numbers = "0";
    if(array.length > 0){
        if(array[0] == "."){
            array.unshift("0");
        }
        numbers = array.join("");
    }
    result.textContent = numbers;
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

const porcentage = (array) =>{
    if(array.length > 0){
        if(array[0] == "."){
            array.unshift("0");
        }
        numbers = array.join("");
        numbers = parseFloat(numbers) / 100;
        numbers = numbers.toString().split("");
        updateDisplay(numbers);
        return numbers;
    }
}

const updateBuffer = (digit,array,arrayBuffer,operation) =>{

    if(Number.isNaN(digit) == false){
        if(arrayBuffer[0] == "a"){
            arrayBuffer[0] = digit;
            arrayBuffer[2] = arrayBuffer[0];
        }else{
            arrayBuffer[1] = digit;
            clearDisplay();
        }
    
        if(arrayBuffer[0] !== 'a' && arrayBuffer[1] !== 'b'){
            if(operation == "+"){
                arrayBuffer[0] = arrayBuffer[0] + arrayBuffer[1];
            }else if(operation == "-"){
                arrayBuffer[0] = arrayBuffer[0] - arrayBuffer[1];
            }else if(operation == "x"){
                arrayBuffer[0] = arrayBuffer[0] * arrayBuffer[1];
            }else if(operation == "÷"){
                arrayBuffer[0] = arrayBuffer[0] / arrayBuffer[1];
            }
            
            updateDisplay(arrayBuffer[0].toString().split(""));
            arrayBuffer[2] = arrayBuffer[1];
            arrayBuffer[1] = 'b';
            console.log(arrayBuffer);
        }
        return [array = [], arrayBuffer];
    }
    return [array, arrayBuffer];
}

const operation = (array,arrayBuffer,sign) =>{
    num = parseFloat(array.join(""));
    [array, arrayBuffer] = updateBuffer(num,array,arrayBuffer,sign);

    return [array , arrayBuffer];
}

const enter = (array,arrayBuffer) =>{

    return [array,arrayBuffer];
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
   btnPorc.addEventListener("click",function(e){
        array = porcentage(array);
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
        [array,arrayBuffer] = enter(array,arrayBuffer);
   });   
}