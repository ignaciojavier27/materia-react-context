import { useState } from "react";
import FooterContext from "./FooterContext.jsx";
import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";


const initialLanguage = "es";
const initialAuth = null;

const translation = {
  es: {
    headerTitle: "Mi aplicacion CON Context Api",
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
    headerTitle: "My application WITH Context Api",
    headerSubtitle: "My Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcom Guest",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translation[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translation.es);
    } else {
      setLanguage("en");
      setTexts(translation.en);
    }
  };

  const handleAuth = () => {
    auth ? setAuth(null) :setAuth(true)
  }


  return (
    <div className="my-page">
      <ThemeProvider>
        <HeaderContext
          texts={texts}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext 
          texts={texts}
          auth={auth}
        />
        <FooterContext 
          texts={texts} 
        />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
