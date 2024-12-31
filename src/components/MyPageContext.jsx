import { useState } from "react";
import FooterContext from "./FooterContext.jsx";
import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";

const initialAuth = null;

const MyPageContext = () => {
  
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = () => {
    auth ? setAuth(null) :setAuth(true)
  }


  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext
            auth={auth}
            handleAuth={handleAuth}
          />
          <MainContext 
            auth={auth}
          />
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
