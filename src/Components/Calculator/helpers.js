export const calculate = (action, operand1, operand2) => {
    switch(action) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return 0;
    }
}

export const getPreValue = num => {
    if (num) return num * 10;
    return 0;
};
