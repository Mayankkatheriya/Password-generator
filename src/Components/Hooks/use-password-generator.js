//todo custom hook for generate password
import { useState, useCallback, useRef } from "react";
const usePassWordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Refs to store functions without causing re-renders
  const setPasswordRef = useRef(setPassword);
  const setErrorMessageRef = useRef(setErrorMessage);

  // todo func to generate password
  // useCallback to memoize the generatePassword function
  const generatePassword = useCallback((checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";

    //TODO making new arrays of checked checkboxes
    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);
    if (selectedOptions.length === 0) {
      setErrorMessageRef.current("Please select at least one character type.");
      setPasswordRef.current("");
      return;
    }

    //TODO concat "charset" string according to selectedOptions array
    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include UpperCase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include LowerCase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "! @#$%^&*()_-+={[}]|:;<,>.?/";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIdx];
    }
    setPasswordRef.current(generatedPassword);
    setErrorMessageRef.current("");
  }, []);

  return { password, errorMessage, generatePassword };
};

export default usePassWordGenerator;
