
let result= ""

alert ("Welcome!")
inputOperands()
alert("your answer is " + " " + result)



function inputOperands(){
   
    let operand1 = parseInt (prompt("Enter first number"))
    let operator = prompt("Enter operator (e.g '+' )")
    let operand2 = parseInt(prompt ("enter second number")) 
    
 
    

if (operator == "+") {
    result= operand1 + operand2
}
else if (operator == "*") {
    result= operand1 * operand2
}
else if (operator == "/") {
    result= operand1 / operand2
}
else if (operator == "-") {
    result= operand1 - operand2
}
else if (operator == "%") {
    result= operand1 % operand2
}


} 


