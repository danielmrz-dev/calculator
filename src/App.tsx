import { Calculator } from "./components/Calculator/Calculator";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App: React.FC = () => {

  return (
    <>
      <GlobalStyles/>
      <Calculator/>
    </>
  )
}