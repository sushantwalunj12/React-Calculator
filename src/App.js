import React, { useState } from 'react';
import './index.css';

function App() {

  let [input1, setInput1] = useState(""); 
  let [input2, setInput2] = useState("");
  let [result, setResult] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("");
  
  const validate = () => {
    if (input1 === "") {
      setError("Error : Num1 cannot be empty");
      return false;
    } else if (input2 === "") {
      setError("Error : Num2 cannot be empty");
      return false;
    } else if (isNaN(input1) || isNaN(input2)) {
      setError("Error : Enter valid input");
      return false;
    }
    return true;
  }

  const calculate = (e) => {
    setResult("");
    setError("");
    setMessage("");
    if(!validate()) {
      return;
    }

    let operator = e.target.innerText;
    let answer;

    if(operator === "+") {
      answer = Number(input1) + Number(input2);
    } else if(operator === "-") {
      answer = input1 - input2;
    } else if(operator === "*") {
      answer = input1 * input2;
    } else if(operator === "/") {
      answer = input1 / input2;
    } 
    setResult(answer);
    setMessage("Success : Your result is shown above!");
  }

  return (
    <div className='container'>
      <h1>React Calculator</h1>
        <input type="text" placeholder='Num 1' id='input1' onChange={(e) => setInput1(e.target.value.trim())}/>
        <input type="text" placeholder='Num 2' id='input2' onChange={(e) => setInput2(e.target.value.trim())}/>
      <div className='keypad'>
        <button onClick={calculate}>+</button>
        <button onClick={calculate}>-</button>
        <button onClick={calculate}>*</button>
        <button onClick={calculate}>/</button>
      </div>

      <div className='result'>{(result === "") ? "": "Result = " + (result)}</div>
      <div className='error'>{error}</div>
      <div className='message'>{message}</div>
    </div>
  );
}

export default App;