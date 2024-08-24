import styled from "styled-components";

function setThemeColor(props: number, colorOne: string, colorTwo: string, colorThree: string): string {
    switch (props) {
        case 2:
            return colorTwo;
        case 3:
            return colorThree;
        default:
            return colorOne;
    }
}

interface ThemeColor {
    themeColor: number
}

export const CalculatorWrapper = styled.main<ThemeColor>`
    background-color: ${(props) => setThemeColor(props.themeColor, "transparent", "#ededed", "black")};
    padding: 2.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    transition: background-color .2s ease;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Logo = styled.span<ThemeColor>`
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "blue")};
    font-weight: 700;
    font-size: 2rem;
    transition: color .2s ease;
`;

export const ThemeWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ThemeText = styled.span<ThemeColor>`
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "blue")};
    transition: color .2s ease;
    align-self: center;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 0.7rem;
`;

export const Switch = styled.div<ThemeColor>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    gap: .75rem;
    position: relative;    
    height: 25px;
    background-color: ${(props) => setThemeColor(props.themeColor, "#182034", "#d1cccc", "blue")};
    border-radius: 32px;
    transition: background-color .2s ease;
`;

export const SwitchLabel = styled.label<ThemeColor>`
    font-weight: bold;
    position: relative;
    height: 50px;
    top: -10px;
    left: 0px;
    font-size: .75rem;
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "blue")};
    transition: color .2s ease;
    text-align: center;
    padding: 0.5rem .25rem;
    cursor: pointer;
`;

export const SwitchInput = styled.input.attrs({ type: "radio" })`
    display: none;

    /* &:checked + ${SwitchLabel} {
        color: #fff065;
        transition: 0.15s ease-out;
        transition-property: color, text-shadow;
    } */
`;

//= CONTINUAR AQUI !!

export const SwitchSelector = styled.span`
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 20px;
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 32px;
    background-color: #d03f2f;
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

    ${SwitchInput}:checked + ${SwitchLabel}.switch-label-y ~ & {
        transform: translateX(-90%);
        background-color: #d03f2f;
    }

    ${SwitchInput}:checked + ${SwitchLabel}.switch-label-i ~ & {
        transform: translateX(45%);
        /* background-color: #f8ac59; */
    }

    ${SwitchInput}:checked + ${SwitchLabel}.switch-label-n ~ & {
        transform: translateX(180%);
        /* background-color: #ed5565; */
    }
`;

export const NumberInput = styled.input`
    width: 100%;
    padding: 1.5rem 1rem;
    text-align: end;
    background-color: #182034;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    border: none;
    border-radius: 10px;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    background-color: #182034;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.15rem .75rem;
    border-radius: 10px;
`;

interface ButtonProps {
    delOrReset?: boolean;
    calculate?: boolean;
    twoColumn?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color:  ${(props) => {
            if (props.delOrReset) {
                return "#637097";
            } else if (props.calculate) {
                return "#d03f2f"
            }
            return "#eae3dc";
        }
    };
    color:  ${(props) => (props.delOrReset || props.calculate ? "#ffffff" : "#000000")};
    box-shadow: 0 5px 0 ${(props) => {
            if (props.delOrReset) {
                return "#404e72";
            } else if (props.calculate) {
                return "#93261a"
            }
            return "#b4a597";
        }
    };;
    font-size: ${(props) => (props.delOrReset ? "1.25rem" : "2rem")};
    padding: 1.1rem 0.85rem 0.85rem;
    font-weight: 700;
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
