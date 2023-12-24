import React from "react";

const StrengthChecker = ({ password }) => {

  //TODO func for getting strength
  const getPasswordStrngth = () => {
    let passWordLength = password.length;
    if (passWordLength < 8) {
      return "";
    } else if (passWordLength < 20) {
      return "Poor";
    } else if (passWordLength < 30) {
      return "Weak";
    } else if (passWordLength < 40) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrngth();

  if (!passwordStrength) return <> </>;
  return (
    <div className="strength">
      Strength<span style={
        {
            color: passwordStrength === "Very Strong" ? "#19A704" :
            passwordStrength === "Strong" ? "#1976D2" : passwordStrength === "Weak" ? "#E65122" :
            "#F50000",

        }
      }>{passwordStrength}</span>
    </div>
  );
};

export default StrengthChecker;
