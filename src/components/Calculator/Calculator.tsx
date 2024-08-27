import { useEffect, useRef, useState } from "react";
import * as S from "./StyledCalculator";

export const Calculator: React.FC = () => {
    const [themeColor, setThemeColor] = useState(1);    
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [operator, setOperator] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key;
            if (!isNaN(Number(key))) {
                handleNumberClick(key);
            } else if (["+", "-", "*", "/"].includes(key)) {
                handleOperatorClick(key);
            } else if (key === "Enter") {
                calculate();
            } else if (key === "Escape") {
                clear();
            } else if (key === "Backspace") {
                del();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleNumberClick = (value: string) => {
        if (inputRef.current) {
            inputRef.current.value += value;
        }
    };

    const handleOperatorClick = (op: string) => {
        if (inputRef.current && inputRef.current.value !== "") {
            setFirstNumber(inputRef.current.value);
            setOperator(op);
            inputRef.current.value = "";
        }
    };

    const clear = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setFirstNumber("");
        setOperator("");
    };

    const del = () => {
        if (inputRef.current) {
            inputRef.current.value = inputRef.current.value.slice(0, -1);
        }
    };

    const calculate = () => {
        if (inputRef.current && inputRef.current.value !== "" && firstNumber !== "") {
            const secondNumber = inputRef.current.value;
            const first = parseFloat(firstNumber);
            const second = parseFloat(secondNumber);
            let result: number;

            switch (operator) {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    result = first / second;
                    break;
                default:
                    return;
            }

            inputRef.current.value = result.toString();
            setFirstNumber("");
            setOperator("");
        }
    };

    return (
        <S.Wrapper themeColor={themeColor}>
            <S.CalculatorWrapper themeColor={themeColor}>
                <S.Header>
                    <S.Logo themeColor={themeColor}>calc</S.Logo>
                    <S.ThemeWrapper>
                        <S.ThemeText themeColor={themeColor}>THEME</S.ThemeText>
                        <S.Switch themeColor={themeColor}>
                            <S.SwitchInput
                                id="switch-y"
                                name="tripple"
                                value="Y"
                                defaultChecked
                                onChange={() => setThemeColor(1)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-y" className="switch-label-y">1</S.SwitchLabel>
                            <S.SwitchInput
                                id="switch-i"
                                name="tripple"
                                value="I"
                                onChange={() => setThemeColor(2)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-i" className="switch-label-i">2</S.SwitchLabel>
                            <S.SwitchInput
                                id="switch-n"
                                name="tripple"
                                value="N"
                                onChange={() => setThemeColor(3)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-n" className="switch-label-n">3</S.SwitchLabel>
                            <S.SwitchSelector />
                        </S.Switch>
                    </S.ThemeWrapper>
                </S.Header>
                <S.NumberInput themeColor={themeColor} type="text" ref={inputRef} readOnly />
                <S.ButtonsWrapper themeColor={themeColor}>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("7")}>7</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("8")}>8</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("9")}>9</S.Button>
                    <S.Button themeColor={themeColor} onClick={del} delOrReset={true}>DEL</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("4")}>4</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("5")}>5</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("6")}>6</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleOperatorClick("+")}>+</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("1")}>1</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("2")}>2</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("3")}>3</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleOperatorClick("-")}>-</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick(".")}>.</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleNumberClick("0")}>0</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleOperatorClick("/")}>/</S.Button>
                    <S.Button themeColor={themeColor} onClick={() => handleOperatorClick("*")}>x</S.Button>
                    <S.Button themeColor={themeColor} delOrReset={true} twoColumn={true} onClick={clear}>RESET</S.Button>
                    <S.Button themeColor={themeColor} calculate={true} twoColumn={true} onClick={calculate}>=</S.Button>
                </S.ButtonsWrapper>
            </S.CalculatorWrapper>
        </S.Wrapper>
    );
}
