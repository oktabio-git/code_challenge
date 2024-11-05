import React, { useState } from "react";
import "./App.css";

function App() {
    const [arrayInput, setArrayInput] = useState("");
    const [numberInput, setNumberInput] = useState("");
    const [result, setResult] = useState(null);

    const arrayTimes = (array, number) => {
        // const resultArray = [];
        // array.forEach((item) => {
        //     resultArray.push(item * number);
        // });
        // return resultArray;
        return array.map((item) => item * number);
    };

    const handleClick = () => {
        const array = arrayInput.split(",");
        const output = arrayTimes(array, numberInput);
        setResult(output);
    };

    return (
        <div className="container">
            <h2>Code Challenge P&G</h2>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Ingresa números separados por comas"
                    value={arrayInput}
                    onChange={(e) => setArrayInput(e.target.value)}
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Ingresa un número"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    className="input-field"
                />
            </div>
            <button onClick={handleClick} className="calculate-button">
                Calcular
            </button>
            {result && <p className="result">Resultado: {result.join(", ")}</p>}
        </div>
    );
}

export default App;
