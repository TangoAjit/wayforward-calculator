import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Action.css';

const Actions = (props) => {
    const { setAction } = props;
    const clickHandler = (key) => (event) => {
        if(event.prevenDefault) event.prevenDefault();
        setAction(key);
    }
    return (
       <div className="action-container">
           <div className="row">
            <div onClick={clickHandler(0)}>0</div>
            <div onClick={clickHandler(1)}>1</div>
            <div onClick={clickHandler(2)}>2</div>
            <div onClick={clickHandler('+')}>+</div>
           </div>
           <div className="row">
            <div onClick={clickHandler(3)}>3</div>
            <div onClick={clickHandler(4)}>4</div>
            <div onClick={clickHandler(5)}>5</div>
            <div onClick={clickHandler('-')}>-</div>
           </div>
           <div className="row">
            <div onClick={clickHandler(6)}>6</div>
            <div onClick={clickHandler(7)}>7</div>
            <div onClick={clickHandler(8)}>8</div>
            <div onClick={clickHandler('*')}>*</div>
           </div>
           <div className="row">
            <div onClick={clickHandler(9)}>9</div>
            <div onClick={clickHandler('c')}>clear</div>
            <div onClick={clickHandler('=')}>=</div>
            <div onClick={clickHandler('/')}>/</div>
           </div>
       </div>
    )
};

Actions.propTypes = {
    setAction: PropTypes.func,
}

Actions.defaultProps = {
    setAction: () => {},
}

export default Actions;