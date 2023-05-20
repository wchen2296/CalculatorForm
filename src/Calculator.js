import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('0');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;
    setResult(result === '0' ? buttonValue : result + buttonValue);
  };

  const handleClearClick = () => {
    setResult('0');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{result}</div>
      <div className="calculator-row">
        <button className="calculator-button calculator-clear" onClick={handleClearClick}>C</button>
        <button className="calculator-button calculator-operator" onClick={handleButtonClick} value="/">/</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button" onClick={handleButtonClick} value="7">7</button>
        <button className="calculator-button" onClick={handleButtonClick} value="8">8</button>
        <button className="calculator-button" onClick={handleButtonClick} value="9">9</button>
        <button className="calculator-button calculator-operator" onClick={handleButtonClick} value="*">*</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button" onClick={handleButtonClick} value="4">4</button>
        <button className="calculator-button" onClick={handleButtonClick} value="5">5</button>
        <button className="calculator-button" onClick={handleButtonClick} value="6">6</button>
        <button className="calculator-button calculator-operator" onClick={handleButtonClick} value="-">-</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button" onClick={handleButtonClick} value="1">1</button>
        <button className="calculator-button" onClick={handleButtonClick} value="2">2</button>
        <button className="calculator-button" onClick={handleButtonClick} value="3">3</button>
        <button className="calculator-button calculator-operator" onClick={handleButtonClick} value="+">+</button>
      </div>
      <div className="calculator-row">
        <button className="calculator-button calculator-zero" onClick={handleButtonClick} value="0">0</button>
        <button className="calculator-button" onClick={handleButtonClick} value=".">.</button>
        <button className="calculator-button calculator-equals" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
