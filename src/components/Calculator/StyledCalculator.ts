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
    background-color: ${(props) => setThemeColor(props.themeColor, "transparent", "#ededed", "#160628")};
    padding: 2.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    transition: background-color .2s ease;
    @media screen and (min-width: 768px) {
        max-width: 750px;

        //= CONTINUAR AQUI, AJUSTAR A RESPONSIVIDADE
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Logo = styled.span<ThemeColor>`
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "#ffe53d")};
    font-weight: 700;
    font-size: 2rem;
    transition: color .2s ease;
`;

export const ThemeWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ThemeText = styled.span<ThemeColor>`
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "#ffe53d")};
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
    background-color: ${(props) => setThemeColor(props.themeColor, "#182034", "#d1cccc", "#2a1146")};
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
    color: ${(props) => setThemeColor(props.themeColor, "white", "#35352c", "#ffe53d")};
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
    transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);

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
        background-color: #00e0d1;
    }
`;

export const NumberInput = styled.input<ThemeColor>`
    width: 100%;
    padding: 1.5rem 1rem;
    text-align: end;
    background-color: ${(props) => setThemeColor(props.themeColor, "#182034", "#ffffff8b", "#2a1146")};
    color: ${(props) => setThemeColor(props.themeColor, "#ffffff", "#182034", "#ffe53d")};
    font-size: 2.5rem;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    transition: background-color .2s ease, color .2s ease;
`;

export const ButtonsWrapper = styled.div<ThemeColor>`
    width: 100%;
    padding: 1.5rem;
    background-color: ${(props) => setThemeColor(props.themeColor, "#182034", "#d1cccc", "#2a1146")};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.15rem .75rem;
    border-radius: 10px;
`;

interface ButtonProps {
    delOrReset?: boolean;
    calculate?: boolean;
    twoColumn?: boolean;
    themeColor: number
}

export const Button = styled.button<ButtonProps>`
    transition: background-color .2s ease, color .2s ease, box-shadow .2s ease;
    background-color:  ${(props) => {
            if (props.delOrReset) {
                return (props) => setThemeColor(props.themeColor, "#637097", "#377f86", "#58077d");

            } else if (props.calculate) {
                return (props) => setThemeColor(props.themeColor, "#d03f2f", "#ca5502", "#00e0d1");
            }
            return (props) => setThemeColor(props.themeColor, "#eae3dc", "#eae3dc", "#341c4f");
        }
    };

    color:  ${(props) => {
            if (props.delOrReset) {
                return (props) => setThemeColor(props.themeColor, "#ffffff", "#ffffff", "#ffffff")
            } else if (props.calculate) {
                return (props) => setThemeColor(props.themeColor, "#ffffff", "#ffffff", "black");
            }

            return (props) => setThemeColor(props.themeColor, "#232c43", "#000000", "#ffe53d")
        }
    };
    
    // (props.delOrReset || props.calculate ? "#ffffff" : "#000000")
    box-shadow: 0 5px 0 ${(props) => {
            if (props.delOrReset) {
                return (props) => setThemeColor(props.themeColor, "#404e72", "#1b5f65", "#bc15f4");
            } else if (props.calculate) {
                return (props) => setThemeColor(props.themeColor, "#93261a", "#893901", "#6cf9f2");
            }
            return (props) => setThemeColor(props.themeColor, "#b4a597", "#a69d91", "#871c9c");
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
