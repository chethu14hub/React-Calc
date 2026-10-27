import React from 'react';
import { useState } from 'react';
import './Calculater.css'

function Calc(){//function 1
const [display, setDisplay]=useState("0");
const[firstNumber,setFirstNumber]=useState("");
const[operator,setOperator]=useState("");
const[secendNumber,setSecendNumber]=useState("");

function handleNum(num) {
        if (operator === "") {
        const updated = firstNumber + num;
        setFirstNumber(updated);
        setDisplay(updated);                                   //function 2
    } else {
        const updated = secendNumber + num;
        setSecendNumber(updated);
        setDisplay(updated);
    }
}

function handleOprtr(op){     //function 3
    setOperator(op);
}

function calculate() {
    let result;                                //function 4

    switch (operator) {
        case "+":
            result = Number(firstNumber) + Number(secendNumber);
            break;

        case "-":
            result = Number(firstNumber) - Number(secendNumber);
            break;

        case "*":
            result = Number(firstNumber) * Number(secendNumber);
            break;

        case "/":
            if (Number(secendNumber) === 0) {
                setDisplay("Cannot divide by zero");
                return;
            }
            result = Number(firstNumber) / Number(secendNumber);
            break;

        default:
            return;
    }

    setDisplay(String(result));
}
function clearCalc() {
    setDisplay("0");
    setFirstNumber("");
    setOperator("");
    setSecendNumber("");
}


return (
          <div className='cantainer'>
            <div className='screen'>
                <form className='frm'>
                    <input  type='text' value={display} className='text'  placeholder='enter the number'></input>
                </form>
                </div>
                <div className='button'>
<button onClick={clearCalc}>C</button>
<button onClick={() => handleOprtr("%")}>%</button>
<button onClick={() => handleOprtr("*")}>*</button>
<button onClick={() => handleOprtr("-")}>-</button>

<button onClick={() => handleNum("7")}>7</button>
<button onClick={() => handleNum("8")}>8</button>
<button onClick={() => handleNum("9")}>9</button>
<button onClick={() => handleOprtr("+")}>+</button>

<button onClick={() => handleNum("4")}>4</button>
<button onClick={() => handleNum("5")}>5</button>
<button onClick={() => handleNum("6")}>6</button>
<button onClick={() => handleOprtr("/")}>/</button>

<button onClick={() => handleNum("1")}>1</button>
<button onClick={() => handleNum("2")}>2</button>
<button onClick={() => handleNum("3")}>3</button>
<button onClick={() => handleNum("0")}>0</button>


<button onClick={calculate} > = </button>
                    



                    

                </div>
          </div>
        );
       
    
    }
 
export default Calc ;