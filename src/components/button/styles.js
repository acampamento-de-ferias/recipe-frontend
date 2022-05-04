
import styled from "styled-components";

export const ButtonStyled = styled.div`

    button {
        margin-top: 10px;
        height: 52px;
        width: 174px;
        background: var(--secundary-orange-color);
        border-radius: 30px;
        border: 1px solid var(--secundary-orange-color);

        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;

        text-transform: uppercase;
        cursor: pointer;
        color: var(--primary-white-color);
    }

    button:disabled {
        background: var(--primary-grey-color);
        border-color: var(--primary-grey-color);
        color: var(--rgb-secundary-dark-color);
        cursor: not-allowed;
    }

    button:focus {
        background: var(--primary-orange-color);
        border: 2px solid var(--rgb-primary-dark-color);
        box-sizing: border-box;
    }

    button:hover:not(:disabled) {
        background: var(--primary-orange-color);
        border-color: var(--primary-orange-color);
    }
`;