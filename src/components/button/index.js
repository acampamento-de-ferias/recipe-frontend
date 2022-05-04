import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({type, text, autofocus = false, disabled = false, clickButton = () => {}}) => {
    return (
        <ButtonStyled>
            <button type={type} 
                    onClick={clickButton} 
                    disabled={disabled}
                    autoFocus={autofocus}> 
                    {text}
            </button>
        </ButtonStyled>
    )
}

export default Button;