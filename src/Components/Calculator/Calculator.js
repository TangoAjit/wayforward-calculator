import React, { useState, useEffect } from 'react';
import InputField from '../InputField/InputField';
import Actions from '../Actions/Actions';
import { calculate, getPreValue } from './helpers';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [displayValue, setDisplayValue] = useState(0);
    const [action, setAction] = useState();
    useEffect(() => { if (num1 === 0 || num1) setDisplayValue(num1); }, [num1])
    useEffect(() => { if (num2 === 0 || num2) setDisplayValue(num2); }, [num2])
    useEffect(() => { if (result === 0 || result) addDelay(result); }, [result])
    useEffect(() => { if(action) addDelay(displayValue) }, [action])
    const addDelay = (value) => {
        setDisplayValue('');
        setTimeout(() => {
            setDisplayValue(value);
        }, 200);
    }
    const getChangeHandler = () => {
        if(action) return setNum2;
        return setNum1;
    }
    const setActions = (actionKey) => {
        if (actionKey === '=' && num1 && num2 && action) {
            if (action !== '/' || (action === '/' && num2 !== 0)) {
                const result = calculate(action, num1, num2);
                setResult(result);
                setNum1(0);
            }
        } else if (['+', '-', '*', '/'].includes(actionKey)) {
            setAction(actionKey);
            if (result) setNum1(result);
            else if (num2) setNum1(num2);
            setResult(0);
            setNum2(0);
        } else if (actionKey === 'c') {
            setNum1(0);
            setNum2(0);
            setResult(0);
            setAction('');
            setDisplayValue(0);
        } else if (!action || (result && action)) setNum1(getPreValue(num1) + actionKey);
        else setNum2(getPreValue(num2) + actionKey);
    }
    return (
        <React.Fragment>
            <InputField value={displayValue} onChange={getChangeHandler()} />
            <Actions setAction={setActions} />
        </React.Fragment>
    )
};

export default Calculator;