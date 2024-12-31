import FooterContext from "./FooterContext.jsx";
import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";


const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
