import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = (props) => {
    const { value, onChange } = props;
    const changeHandler = ({target: { value }}) => {
        try {
            onChange(parseInt(value || 0));
        } catch (error) {
            alert('Only Numbers are allowed');
        }   
    }
    return (
        <input
            className="input-field"
            type="number"
            value={value}
            onChange={changeHandler}
            autoFocus
        />
    )
};

InputField.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
}

InputField.defaultProps = {
    value: undefined,
    onChange: () => {},
}


export default InputField;