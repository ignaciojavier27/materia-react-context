import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguagueContext from "../context/LanguageContext";

const FooterContext = () => {

  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguagueContext);

  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
