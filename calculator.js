console.log("Calculator Script invoked");
function Calculator() {
    console.log("Constructor method calculator called");
    this.total = 0;
}
// Cannot use arrow functions here since arrow functions do not have their own this object
Calculator.prototype.add = function (num) {
    this.total += num;
    return this.total;
}
Calculator.prototype.subtract = function (num) {
    this.total -= num;;
    return this.total;
}
Calculator.prototype.multiply = function (num) {
    this.total *= num
    return this.total;
}
Calculator.prototype.divide = function (num) {
    if (num === 0) {
        throw new Error("Denominator cannot be 0")
    }
    this.total /= num;
    return this.total;
}
