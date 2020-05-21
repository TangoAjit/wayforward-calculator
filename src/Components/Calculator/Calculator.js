import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import Actions from '../Actions/Actions';
import actions from '../Actions/helper';

const Calculator = () => {
    const [num1, setNum1] = useState(undefined);
    const [num2, setNum2] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [action, setAction] = useState();
    const [stage, setStage] = useState(1);
    const getValue = () => {
        switch (stage) {
            case 1:
                return num1;
            case 2:
                return num2;
            case 3:
                return result;
            default:
                return undefined;
        }
    }
    const getChangeHandler = () => {
        switch (stage) {
            case 1:
                return setNum1;
            case 2:
                return setNum2;
            default:
                return undefined;
        }
    }
    const getResult = () => {
        switch(action) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 + num2;
            case '8':
                return num1 + num2;
            case '/':
                return num1 + num2;
            default:
                return 0;
        }
    }
    const setActions = (actionKey) => {
        if (actionKey === '=' && num1 && num2 && action) {
            if (action !== '/' || (action === '/' && num2 !== 0)) {
                const result = getResult();
                setResult(result);
            }
        } else if (['+', '-', '*', '/'].contains(actionKey)) {
            setAction(actionKey);
        }
    }
    console.log(num1);
    return (
        <React.Fragment>
            <InputField value={getValue()} onChange={getChangeHandler()} />
            <Actions setStage={setStage} setAction={setActions} />
        </React.Fragment>
    )
};

export default Calculator;