export const calculate = (action, operand1, operand2) => {
    const num1 = parseInt(operand1);
    const num2 = parseInt(operand2)
    switch(action) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

export const getPreValue = num => {
    if (num) return num * 10;
    return 0;
};
