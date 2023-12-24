import React, { useState } from "react";
import "./Main.css";
import usePassWordGenerator from "../Hooks/use-password-generator";
import StrengthChecker from "./StrengthChecker";

const Main = () => {
  const [length, setlength] = useState(20);
  const [CheckBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase Letters", state: false },
    { title: "Include LowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setcopied] = useState(false)

  const handleCheckboxChange = (idx) => {
    let updatedData = [...CheckBoxData];
    updatedData[idx].state = !updatedData[idx].state;
    setCheckBoxData(updatedData);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setcopied(true)
    
    setTimeout(()=>{
        setcopied(false)
    }, 500)
  }

  const { password, errorMessage, generatePassword } = usePassWordGenerator();

  return (
    <main>
      <div className="container">

        {/* PassWord Text And Copy */}
        {password && (
          <div className="password-header">
            <div className="title">{password}</div>
            <button
              className="copy-btn"
              onClick={() => handleCopy(password)}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}

        {/* Character length */}
        <div className="char-length">
          <span>
            <label htmlFor="length">Character Length</label>
            <label htmlFor="length">{length}</label>
          </span>
          <input
            type="range"
            id="length"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
        </div>

        {/* CheckBoxes */}
        <div className="checkboxes">
          {CheckBoxData.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={item.state}
                  onChange={() => {
                    handleCheckboxChange(index);
                  }}
                />
                <label>{item.title}</label>
              </div>
            );
          })}
        </div>

        {/* {Strength} */}
        <StrengthChecker password = {password}/>

        {/* Error Handling */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Generate button */}
        <button
          className="generate-btn"
          onClick={() => {
            generatePassword(CheckBoxData, length);
          }}
        >
          Generate Password
        </button>
      </div>
    </main>
  );
};

export default Main;
