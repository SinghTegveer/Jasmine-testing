console.log("Main Script invoked");

// Method to update the span display for calculator output
function updateResult(result) {
    console.log("Update result method called");
    // Can alternatively use inner text or inner HTML
    document.getElementById("calculatorOutput").innerHTML = result
}

// Event handler to handle input field change
document.getElementById('calculatorInput').addEventListener('change', (event) => {
    console.log("Event: ", event);
    console.log("Input value: ", event.target.value);

    const value = event.target.value;
    // Use regular expression to get values of first and second number and the operator
    const reg = /\+|\*|\-|\//
    // Use split method to separate based on regex - regex101 website
    const inputSplit = value.split(reg);
    console.log("Input Split: ", inputSplit);
    const num1 = parseInt(inputSplit[0]);
    const num2 = parseInt(inputSplit[1]);
    // Use match method to return the regex match
    const operator = value.match(reg);

    // Improve errors - operator is null
    if (operator === null) {
        console.log("Operator not available");
        updateResult("Operator not available");
        return;
    }
    // Improve errors - number not recognized
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Input is not a number");
        updateResult("Input is not a number");
    }

    console.log("A: ", num1, " B: ", num2);
    console.log("Operator: ", operator);

    // Initialize calculator object - creates a new object everytime same as doing num1 + num2 rather than only having one number adding and subtracting later
    var cal = new Calculator();
    cal.add(num1)

    switch (operator) {
        case "+":
            result = cal.add(num2);
            break;
        case "-":
            result = cal.subtract(num2);
            break;
        case "*":
            result = cal.multiply(num2);
            break;
        case "/":
            result = cal.divide(num2);
            break;
        default:
            console.log("Invalid operator");
            throw new Error("Invalid operation requested")
    }
    // Display the result and map to the HTML screen
    console.log("Result: ", result);
    updateResult(result);
})