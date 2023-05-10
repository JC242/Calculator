let val = "1 / 2"

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

const  values = (val)=>{
    const digits = val.split(" ")
    return digits
}

const calculator = (val) =>{

    const vals = values(val)
    const digit1 = parseInt(vals[0])
    const digit2 = parseInt(vals[2]);

    if(vals[1] === "+"){
        console.log(add(digit1,digit2))
    }
    else if(vals[1] === "-"){
        console.log(substract(digit1,digit2))
    }
    else if(vals[1] === "*"){
        console.log(multiply(digit1,digit2))
    }
    else if(vals[1] === "/"){
        console.log(divide(digit1,digit2))
    }
} 

calculator(val);