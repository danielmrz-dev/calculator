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
                        <S.InputLabel htmlFor="one">1</S.InputLabel>
                        <S.ThemeOption type="radio" name="theme" id="one"/>

                        <S.InputLabel htmlFor="two">2</S.InputLabel>
                        <S.ThemeOption type="radio" name="theme" id="two"/>

                        <S.InputLabel htmlFor="three">3</S.InputLabel>
                        <S.ThemeOption type="radio" name="theme" id="three"/>                        
                    </S.InputsWrapper>
                </S.ThemeWrapper>
            </S.Header>
            <S.NumberInput type="number" />

            <S.ButtonsWrapper>
                <S.Button>7</S.Button>
                <S.Button>8</S.Button>
                <S.Button>9</S.Button>
                <S.Button delOrReset={true}>DEL</S.Button>
                <S.Button>4</S.Button>
                <S.Button>5</S.Button>
                <S.Button>6</S.Button>
                <S.Button>+</S.Button>
                <S.Button>1</S.Button>
                <S.Button>2</S.Button>
                <S.Button>3</S.Button>
                <S.Button>-</S.Button>
                <S.Button>.</S.Button>
                <S.Button>0</S.Button>
                <S.Button>/</S.Button>
                <S.Button>x</S.Button>
                <S.Button delOrReset={true} twoColumn={true}>RESET</S.Button>
                <S.Button calculate={true} twoColumn={true}>=</S.Button>
            </S.ButtonsWrapper>
        </S.CalculatorWrapper>
    )
}