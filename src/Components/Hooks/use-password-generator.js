import { useState } from "react";

const usePassWordGenerator = () => {
    const [password, setPassword] = useState("");
    const [errorMessage, seterrorMessage] = useState("");

    const generatePassword = (checkboxData, length) => {
        let charset = "";
        let generatedPassword = ""

        const selectedOptions = checkboxData.filter((checkbox)=>checkbox.state);
        if(selectedOptions.length === 0){
            seterrorMessage("Please select at least one character type.");
            setPassword("")
            return;
        }

        selectedOptions.forEach(option => {
            switch(option.title) {
                case 'Include UpperCase Letters':
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case 'Include LowerCase Letters':
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case 'Include Numbers':
                    charset += "0123456789";
                    break;
                case 'Include Symbols':
                    charset += "! @#$%^&*()_-+={[}]|:;<,>.?/";
                    break;
                default :
                    break;
            }
        });

        for (let i=0; i<length; i++) {
            const randomIdx = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIdx];
        }
        setPassword(generatedPassword);
        seterrorMessage("");
    }

    return { password, errorMessage, generatePassword };
}

export default usePassWordGenerator