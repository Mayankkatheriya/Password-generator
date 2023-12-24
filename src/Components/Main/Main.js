import React, { useState } from "react";
import "./Main.css";
import usePassWordGenerator from "../Hooks/use-password-generator"; //Custom hook for password Generator
import StrengthChecker from "./StrengthChecker"; //StrengthChecker Componen
import Button from "./Button"; //Button Component
import CheckBoxes from "./CheckBoxes"; //CheckBox Component


const Main = () => {
  const { password, errorMessage, generatePassword } = usePassWordGenerator();  // *custom hook
  const [length, setlength] = useState(20);
  const [copied, setcopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [CheckBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase Letters", state: false },
    { title: "Include LowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  //Todo Func for checkBox update
  const handleCheckboxChange = (idx) => {
    let updatedData = [...CheckBoxData];
    updatedData[idx].state = !updatedData[idx].state;
    setCheckBoxData(updatedData);
  };

  //Todo Copy button dunction
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 500);
  };
  //TODO Theme adjust
  const handleTheme = () => {
    if (!isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    setIsDark(!isDark);
  }

  return (
    <main>
      <div className="container">

        {/* Toggle Button */}
        <div className="toggle">
          <label className="switch">
            <input type="checkbox" checked = {isDark} onChange={handleTheme}/>
            <span className="slider round"></span>
          </label>
        </div>

        {/* PassWord Text And Copy */}
        {password && (
          <div className="password-header">
            <div className="title">{password}</div>

            <Button
              customClass="copy-btn"
              text={copied ? "Copied" : "Copy"}
              onClick={handleCopy}
            />
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
              <CheckBoxes key = {index} title = {item.title} state = {item.state} onClick = {() => {handleCheckboxChange(index)}}/>
            );
          })}
        </div>
        {/* {Strength} */}
        <StrengthChecker password={password} />
        
        {/* Error Handling */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Generate button */}
        <Button
          customClass="copy-btn"
          text="Generate Password"
          onClick={() => {generatePassword(CheckBoxData, length)}}
        />
      </div>
    </main>
  );
};

export default Main;
