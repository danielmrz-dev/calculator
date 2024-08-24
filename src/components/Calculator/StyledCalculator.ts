import styled from "styled-components";

export const CalculatorWrapper = styled.main`
    background-color: #ccc;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.span`
    color: #ffffff;
    font-weight: 700;
    font-size: 2rem;
`;

export const ThemeWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ThemeText = styled.span`
    color: #ffffff;
    align-self: flex-end;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 0.9rem;
`;

export const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    grid-row-start: 1;
`;

export const ThemeOption = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 16px; /* Espaçamento extra após o input */

    &:checked {
        background-color: #4caf50; /* Cor do círculo quando selecionado */
        border-color: #4caf50;
    }

    &:hover {
        border-color: #2196f3; /* Cor do círculo ao passar o mouse */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5); /* Destaque ao focar no input */
    }
`;

export const NumberInput = styled.input`
    width: 100%;
    padding: 1rem;
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
`;

interface ButtonProps {
    delOrReset?: boolean;
    calculate?: boolean;
    twoColumn?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${(props) => (props.delOrReset ? "1.5rem" : "2rem")};
    padding: 1rem 0.75rem 0.75rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-start: ${(props) => {
        if (props.delOrReset && props.twoColumn) {
            return 1;
        } else if (props.calculate && props.twoColumn) {
            return 3;
        }
        return null;
    }};
    grid-column-end: ${(props) => {
        if (props.delOrReset && props.twoColumn) {
            return 3;
        } else if (props.calculate && props.twoColumn) {
            return 5;
        }
        return null;
    }};
`;
