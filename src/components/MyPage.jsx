import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";

const translation = {
  es: {
    headerTitle: "Mi aplicacion SIN Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application WITHOUT Context Api",
    headerSubtitle: "My Header",
    headerLight: "Sure",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);

  const handleTheme = (e) => {
    e.target.value === "light" ? setTheme("light") : setTheme("dark");
  };

  const handleLanguage = (e) => {
    if(e.target.value === "es"){
        setLanguage("es");
        setTexts(translation.es);
    }else{
        setLanguage("en");
        setTexts(translation.en);
    }
  }

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage} />
      <Main theme={theme} texts={texts} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
