function Calculator() {
    this.total = 0;
}
Calculator.prototype.add = (num) => {
    return this.total += num
}
Calculator.prototype.subtract = (num) => {
    return this.total -= num
}
Calculator.prototype.multiply = (num) => {
    return this.total *= num
}
Calculator.prototype.divide = (num) => {
    return this.total /= num
}
