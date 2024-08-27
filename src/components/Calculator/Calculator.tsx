import { useState } from "react";
import * as S from "./StyledCalculator";

export const Calculator: React.FC = () => {

    const [themeColor, setThemeColor] = useState(1)

    return (
        <S.Wrapper themeColor={themeColor}>
            <S.CalculatorWrapper themeColor={themeColor} >
                <S.Header>
                    <S.Logo themeColor={themeColor}>calc</S.Logo>
                    <S.ThemeWrapper>
                        <S.ThemeText themeColor={themeColor}>
                            THEME
                        </S.ThemeText>
                        <S.Switch themeColor={themeColor}>
                            <S.SwitchInput id="switch-y" name="tripple" value="Y"
                                onChange={() => setThemeColor((themeColor * 0) + 1)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-y" className="switch-label-y">1</S.SwitchLabel>
                            <S.SwitchInput id="switch-i" name="tripple" value="I" defaultChecked
                                onChange={() => setThemeColor((themeColor * 0) + 2)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-i" className="switch-label-i">2</S.SwitchLabel>
                            <S.SwitchInput id="switch-n" name="tripple" value="N"
                                onChange={() => setThemeColor((themeColor * 0) + 3)}
                            />
                            <S.SwitchLabel themeColor={themeColor} htmlFor="switch-n" className="switch-label-n">3</S.SwitchLabel>
                            <S.SwitchSelector />
                        </S.Switch>
                    </S.ThemeWrapper>
                </S.Header>
                <S.NumberInput themeColor={themeColor} type="number" value={399.981} />
                <S.ButtonsWrapper themeColor={themeColor}>
                    <S.Button themeColor={themeColor}>7</S.Button>
                    <S.Button themeColor={themeColor}>8</S.Button>
                    <S.Button themeColor={themeColor}>9</S.Button>
                    <S.Button themeColor={themeColor} delOrReset={true}>DEL</S.Button>
                    <S.Button themeColor={themeColor}>4</S.Button>
                    <S.Button themeColor={themeColor}>5</S.Button>
                    <S.Button themeColor={themeColor}>6</S.Button>
                    <S.Button themeColor={themeColor}>+</S.Button>
                    <S.Button themeColor={themeColor}>1</S.Button>
                    <S.Button themeColor={themeColor}>2</S.Button>
                    <S.Button themeColor={themeColor}>3</S.Button>
                    <S.Button themeColor={themeColor}>-</S.Button>
                    <S.Button themeColor={themeColor}>.</S.Button>
                    <S.Button themeColor={themeColor}>0</S.Button>
                    <S.Button themeColor={themeColor}>/</S.Button>
                    <S.Button themeColor={themeColor}>x</S.Button>
                    <S.Button themeColor={themeColor} delOrReset={true} twoColumn={true}>RESET</S.Button>
                    <S.Button themeColor={themeColor} calculate={true} twoColumn={true}>=</S.Button>
                </S.ButtonsWrapper>
            </S.CalculatorWrapper>
        </S.Wrapper>
    )
}