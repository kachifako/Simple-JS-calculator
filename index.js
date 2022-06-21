
let result= ""

alert ("Welcome!")
inputOperands()
alert("Your answer is " + " " + result)



function inputOperands(){
   
    let operand1 = parseInt (prompt("Enter first number"))
    let operator = prompt("Enter operator ( +, /, % or - )")
    let operand2 = parseInt(prompt ("Enter second number")) 
    
 
    

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


