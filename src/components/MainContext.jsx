import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"
import LanguagueContext from "../context/LanguageContext";
import AuthContext  from "../context/AuthContext";

const MainContext = () => {

    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguagueContext);
    const { auth } = useContext(AuthContext);

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

