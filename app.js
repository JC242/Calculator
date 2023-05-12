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
    console.log(array)
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
        array = ["0"]
    }
    updateDisplay(array);
    return array; 
}

const clearDisplay = (array) =>{
    array = ["0"];
    updateDisplay(array);
    return array;
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

const add = () =>{

}

const sub = () =>{

}



window.onload = () =>{
   btnsNums.forEach(num => {
       num.addEventListener("click",function(e){
        array = updateArray(num.textContent)
       });
   });
   btnDel.addEventListener("click",function(e){
        array = deleteNum(array);
   });
   btnAC.addEventListener("click",function(e){
        array = clearDisplay(array);
   });
   btnPorc.addEventListener("click",function(e){
        array = porcentage(array);
   });
   btnAdd.addEventListener("click",function(e){
        array = add(array);
   });
   
}