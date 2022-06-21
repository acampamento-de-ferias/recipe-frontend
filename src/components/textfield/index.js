import React from "react";
import { TextfieldStyled } from "./styles";
import { v4 as uuid } from 'uuid';

const Textfield = ({type, value, name, label, handleChange, autoComplete = "off"}) => {
    const uniqueId = uuid();

    return (
        <TextfieldStyled>
            {label && (
                <label htmlFor={uniqueId}> {label} </label>
            )}
            <input 
                type={type} 
                name={name}
                value={value} 
                onChange={handleChange}
                autoComplete={autoComplete}
            />
        </TextfieldStyled>
    )
}

export default Textfield;