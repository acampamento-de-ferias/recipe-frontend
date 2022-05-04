import React from "react";
import { Button } from "./components";
import { useNavigate } from "react-router-dom";

const DesignSystem = () => {
    let navigate = useNavigate();

    const redirect = () => {
      navigate("/home");
    } 
    
    return (
       <>
        <h3> Hello World </h3>

            {/* Botão Enabled */}
            <Button
                type={'button'}
                text={'example text'} 
                clickButton={redirect}
            />

            {/* Botão Disabled */}
            <Button
                type={'button'}
                text={'example text'} 
                disabled={true}
                clickButton={redirect}
            />
       </>
    )
}

export default DesignSystem;