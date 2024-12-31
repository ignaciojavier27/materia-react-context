import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"
import LanguagueContext from "../context/LanguageContext";

const MainContext = ({ auth }) => {

    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguagueContext);

    return (
        <main className={theme}>
            {
                auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>
            }
            <p>{texts.mainContent}</p>
        </main>      
    )
}

export default MainContext

