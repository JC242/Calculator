const btnsNums = document.querySelectorAll(".num");
const btnOperation = document.querySelectorAll(".operation");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const btnDel = document.querySelector(".delete");
const btnAC = document.querySelector(".erase");
const btnNeg = document.querySelector(".negative");
const btnEnter = document.querySelector(".enter");

let array = ["0"];
let arrayBuffer = ['a','b','c','d','r'];
let countArray = [];

const updateArray = (digit)=>{
    equation = count.textContent.split(" ");
    if(arrayBuffer[2] != 'c' && equation.length > 2 && array.length == 0){
        array = arrayBuffer[0].toString().split("");
        arrayBuffer[0] = 'a'
    }
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
    console.log(array)
    updateDisplay(array);
    return array;
}   

const updateDisplay = (array)=>{
    let numbers = "0";
    console.log(array);
    while(array.length > 16){
        array.pop();
    }
    if(array.length > 0){
        if(array[0] == "."){
            array.unshift("0");
        }
        console.log(array)
        numbers = array.join("");
    }
    result.textContent = numbers;
    return array;
}

const updateDisplayCount = (digit1,digit2,sign)=>{
    let ecuation = "";
    if(parseFloat(digit2) <0){
        digit2 = `(${digit2})`;
    }
    if(digit1 != "" && sign != "d" && digit2 != ""){
        ecuation = `${digit1} ${sign} ${digit2} =`
    }else if(digit1 != "" && sign != "d"){
        ecuation = `${digit1} ${sign}`;
    }
    else{
        ecuation = "";
    }
    count.textContent = ecuation;
}

const deleteNum = () =>{
    array = result.textContent.split("")
    array.pop();
    if(array.length == 0){
        array = ["0"];
    }
    updateDisplay(array);
    return array; 
}

const clearDisplay = (array,arrayBuffer) =>{
    array = ["0"];
    arrayBuffer = ['a','b','c','d','r'];
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
        return numbers;
    }
    return nums = ["0"];
}

const updateBuffer = (digit,array,arrayBuffer,operation) =>{

    if(operation != "="){
        arrayBuffer[3] = operation;
    }
    if(arrayBuffer[2] != "c"){
        updateDisplayCount(arrayBuffer[0],"",arrayBuffer[3]);
    }
    if(Number.isNaN(digit) == false || operation == "="){
            if(arrayBuffer[0] == "a"){
                arrayBuffer[0] = digit;
                arrayBuffer[2] = arrayBuffer[0];
                updateDisplayCount(digit,"",arrayBuffer[3]);
            }else{
                if(Number.isNaN(digit) == false){
                    arrayBuffer[1] = digit;
                }else{
                    arrayBuffer[1] = arrayBuffer[2];
                }
            }
            if(arrayBuffer[0] !== 'a' && arrayBuffer[1] !== 'b' || operation == "="){
                if(arrayBuffer[1] == 'b'){arrayBuffer[1] = arrayBuffer[4]}
                updateDisplayCount(arrayBuffer[0],arrayBuffer[1],arrayBuffer[3])

                if(operation == "+" || arrayBuffer[3] == "+"){
                    arrayBuffer[0] = arrayBuffer[0] + arrayBuffer[1];
                }else if(operation == "-"  || arrayBuffer[3] == "-"){
                    arrayBuffer[0] = arrayBuffer[0] - arrayBuffer[1];
                }else if(operation == "x"  || arrayBuffer[3] == "x"){
                    arrayBuffer[0] = arrayBuffer[0] * arrayBuffer[1];
                }else if(operation == "÷"  || arrayBuffer[3] == "÷"){
                    arrayBuffer[0] = arrayBuffer[0] / arrayBuffer[1];
                }
                arrayBuffer[4] = arrayBuffer[0]
                updateDisplay(arrayBuffer[0].toString().split(""));
                
                arrayBuffer[2] = arrayBuffer[1];
                arrayBuffer[1] = 'b';
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
    
window.onload = () =>{

    document.body.addEventListener('keydown',keyDown);
    function keyDown(event){
        if(event.keyCode > '95' && event.keyCode < '106'){
            num = (parseInt(event.keyCode) - 96).toString();
            array = updateArray(num)
        }
        if(event.keyCode == "107"){
            [array,arrayBuffer] = operation(array,arrayBuffer,"+");
        }
        if(event.keyCode == "109"){
            [array,arrayBuffer] = operation(array,arrayBuffer,"-");
        }
        if(event.keyCode == "106"){
            [array,arrayBuffer] = operation(array,arrayBuffer,"x");
        }
        if(event.keyCode == "111"){
            [array,arrayBuffer] = operation(array,arrayBuffer,"÷");
        }
        if(event.keyCode == "13"){
            [array,arrayBuffer] = operation(array,arrayBuffer,"=");
        }
        if(event.keyCode == "110"){
            array = updateArray(".");
        }
        if(event.keyCode == "8"){
            array = deleteNum();
        }
        
    }
   btnsNums.forEach(num => {
       num.addEventListener("click",function(e){
            array = updateArray(num.textContent);
       });
   });
   btnDel.addEventListener("click",function(e){
        array = deleteNum();
   });
   btnAC.addEventListener("click",function(e){
        [array,arrayBuffer] = clearDisplay(array,arrayBuffer);
        updateDisplayCount("","","")
   });
   btnNeg.addEventListener("click",function(e){
       array = addNegative();
   });
   btnOperation.forEach(btn =>{
        btn.addEventListener("click",function(e){
            [array,arrayBuffer] = operation(array,arrayBuffer,this.textContent);
        });
   });
}