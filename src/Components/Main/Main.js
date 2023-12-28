import React, { useEffect, useState } from "react";
import "./Main.css";
import usePassWordGenerator from "../Hooks/use-password-generator"; //Custom hook for password Generator
import StrengthChecker from "./StrengthChecker"; //StrengthChecker Componen
import Button from "./Button"; //Button Component
import CheckBoxes from "./CheckBoxes"; //CheckBox Component

const Main = () => {
  const { password, errorMessage, generatePassword } = usePassWordGenerator(); // *custom hook
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
    //setting theme in local storage
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  };
  //TODO set Theme when page reload
  useEffect(() => {
    // retrieve the theme from local storage
    console.log("hii");
    const isDarkLocal = localStorage.getItem("isDark") === "true";
    setIsDark(isDarkLocal);

    // set the initial theme class
    document.body.classList[isDarkLocal ? "add" : "remove"]("dark");
  }, []);

  return (
    <main>
      <div className="container">
        {/* Theme Toggle Button */}
        <div className="toggle">
          {isDark ? (
            //Dark
            <svg
              width="30"
              height="30"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31.999" cy="32.12" r="31.875" fill="#405866" />
              <g fill="#4f6977">
                <circle cx="5.965" cy="36.541" r="3.845" />
                <circle cx="6.312" cy="18.918" r="2.194" />
                <path d="M22.963 9.672a3.433 3.433 0 1 1-6.867.001a3.433 3.433 0 0 1 6.867-.001" />
                <circle cx="55.47" cy="41.619" r="3.433" />
                <path d="M47.06 8.404c0 2.297-1.864 4.157-4.161 4.157s-4.159-1.86-4.159-4.157a4.16 4.16 0 1 1 8.32 0" />
              </g>
              <path
                fill="#fff"
                d="M25.447 22.24c-.179-.41-.585-.511-.995-.419c-6.165 1.38-9.714 6.536-13.228 11.346c-.375.515-.257.944.043 1.178c.039.238.187.449.511.562c4.223 1.484 8.614 1.864 12.92.536c.25-.076.44-.235.593-.425c.483-.07 1.029-.396 1.182-.885c1.201-3.861.573-8.235-1.026-11.893m11.535 11.89c.152.489.694.814 1.182.885c.152.189.339.349.589.425c4.31 1.328 8.7.948 12.922-.536c.326-.112.474-.323.511-.562c.299-.233.42-.663.043-1.178c-3.514-4.81-7.06-9.966-13.229-11.346c-.41-.092-.812.001-.991.419c-1.604 3.658-2.228 8.03-1.027 11.893"
              />
              <path
                fill="#374c51"
                d="M36.437 34.701c.168.542.772.904 1.311.982c.168.211.38.388.653.472c4.782 1.477 9.657 1.053 14.349-.593c.359-.127.526-.36.569-.624c.332-.261.461-.737.043-1.31c-3.899-5.339-7.838-11.06-14.687-12.597c-.454-.102-.904.001-1.1.466c-1.778 4.061-2.476 8.918-1.138 13.204m2.031-.579c-.008-.002-.012 0-.023-.004c-.916-3.559-.37-7.396.976-10.793c5.276 1.552 8.509 6.072 11.637 10.385c-4.139 1.346-8.355 1.718-12.59.412"
              />
              <path
                fill="#2b3e44"
                d="M42.727 46.5h-1.628c-.088 0-.143.207-.217.219c-.087.012-.165.104-.245.136c-.141.055-.258.181-.356.273l-.066.066c-3.934 3.836-9.09 4.721-13.995 2.196c-2.636-1.355-2.417-2.544-5.237-2.544c-1.154 0-1.583 1.339-.885 2.141c6.357 7.343 17.15 7.168 23.518-.175c.691-.801.263-2.312-.889-2.312"
              />
              <path
                fill="#374c51"
                d="M36.31 40.772c-3.164 1.482-6.224 1.767-9.02-.608c-.741-.627-2.067.827-1.232 1.537c3.272 2.778 7.122 2.27 10.779.558c1.049-.491.654-2.038-.527-1.487"
              />
              <path
                fill="#4f6977"
                d="M15.07 23.543c1.64-3.084 3.914-5.152 7.576-4.933c.969.055 1.154-1.903.062-1.97c-4.286-.253-7.06 2.467-8.95 6.03c-.546 1.024.702 2.023 1.312.87m33.29.003c-1.641-3.084-3.914-5.152-7.575-4.933c-.968.055-1.155-1.903-.063-1.97c4.285-.253 7.06 2.467 8.95 6.03c.547 1.024-.701 2.023-1.312.87"
              />
              <path
                fill="#374c51"
                d="M26.15 21.498c-.199-.456-.647-.567-1.104-.466c-6.844 1.532-10.787 7.257-14.685 12.597c-.419.572-.287 1.049.045 1.31c.043.264.211.497.569.624c4.688 1.646 9.563 2.069 14.348.593c.273-.084.483-.261.653-.472c.537-.078 1.141-.44 1.313-.982c1.333-4.287.635-9.144-1.139-13.204M12.666 33.71c3.126-4.313 6.359-8.833 11.635-10.385c1.349 3.396 1.892 7.234.979 10.793c-.014.004-.02.002-.027.004c-4.235 1.306-8.451.934-12.587-.412"
              />
              <path
                fill="#25333a"
                d="M23.947 29.571c0 1.726-1.326 3.125-2.956 3.125c-1.636 0-2.966-1.4-2.966-3.125c0-1.726 1.33-3.122 2.966-3.122c1.631 0 2.956 1.398 2.956 3.122m21.636 0c0 1.726-1.327 3.125-2.955 3.125c-1.639 0-2.967-1.4-2.967-3.125c0-1.726 1.328-3.122 2.967-3.122c1.628 0 2.955 1.398 2.955 3.122"
              />
            </svg>
          ) : (
            // Light
            <svg
              width="30"
              height="30"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#ffca28">
                <path d="m20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9zm23-55.4l-7 7.2c2.5.5 4.8 1.5 6.9 2.9zm-32 32.2l-7.2 7l10.1-.1C13 41.3 12 39 11.5 36.5m41-9l7.2-7l-10.1.1c1.4 2.1 2.4 4.4 2.9 6.9m-38.1-6.9l-10.1-.1l7.2 7c.5-2.5 1.5-4.8 2.9-6.9m35.2 22.8l10.1.1l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9M27.5 11.5l-7-7.2l.1 10.1c2.1-1.4 4.4-2.4 6.9-2.9m9 41l7 7.2l-.1-10.1C41.3 51 39 52 36.5 52.5M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44m34.4-24l4-9.3l-9.3 4c2.1 1.5 3.9 3.3 5.3 5.3M11 32c0-1.3.1-2.5.4-3.7L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7m51 0l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7zM20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3m24 34.4l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2m-8.3-37.8L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4c1.3 0 2.5.1 3.7.4m-7.4 41.2L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4c-1.3 0-2.5-.1-3.7-.4" />
                <path d="M32 13c-10.5 0-19 8.5-19 19s8.5 19 19 19s19-8.5 19-19s-8.5-19-19-19M20.4 30.7c1.2-3.2 3-4.9 4.7-4.9s3.5 1.6 4.7 4.9c.1.3-.5.9-.8.6c-1.1-1.2-2.5-1.7-3.9-1.7s-2.8.5-3.9 1.7c-.4.4-1-.2-.8-.6m20.3 7.5C39.1 40.8 36 43 32 43c-4 0-7.2-2.3-8.7-4.8c-.4-.7.1-1.4.8-1c5.1 3.6 10.8 3.6 15.9 0c.6-.4 1.1.4.7 1m2.2-6.9c-1.1-1.2-2.5-1.7-3.9-1.7s-2.8.5-3.9 1.7c-.3.3-.9-.3-.8-.6c1.2-3.2 3-4.9 4.7-4.9c1.8 0 3.5 1.6 4.7 4.9c.1.4-.5 1-.8.6" />
              </g>
            </svg>
          )}
          <label className="switch">
            <input type="checkbox" checked={isDark} onChange={handleTheme} />
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
              <CheckBoxes
                key={index}
                title={item.title}
                state={item.state}
                onClick={() => {
                  handleCheckboxChange(index);
                }}
              />
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
          onClick={() => {
            generatePassword(CheckBoxData, length);
          }}
        />
      </div>
    </main>
  );
};

export default Main;
