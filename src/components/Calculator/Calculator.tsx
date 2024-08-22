import * as S from "./StyledCalculator";

export const Calculator: React.FC = () => {
    return (
        <S.CalculatorWrapper>
            <S.Header>
                <S.Logo>calc</S.Logo>
                <S.ThemeWrapper>
                    <S.ThemeText>
                        THEME
                    </S.ThemeText>
                    <S.InputsWrapper>
                        <S.InputLabel>1
                            <S.ThemeOption type="radio" name="theme"/>
                        </S.InputLabel>
                        <S.InputLabel>2
                            <S.ThemeOption type="radio" name="theme"/>
                        </S.InputLabel>
                        <S.InputLabel>3
                            <S.ThemeOption type="radio" name="theme"/>
                        </S.InputLabel>
                    </S.InputsWrapper>

                </S.ThemeWrapper>
            </S.Header>
        </S.CalculatorWrapper>
    )
}