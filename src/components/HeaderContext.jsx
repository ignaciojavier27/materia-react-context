import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = ({ texts, handleLanguage, auth, handleAuth }) => {

  const {theme, handleTheme} = useContext(ThemeContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="lenguage" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <br />
      <input
        onClick={handleTheme}
        type="radio"
        name="theme"
        id="light-context"
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        onClick={handleTheme}
        type="radio"
        name="theme"
        id="dark-context"
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <br />
      <button onClick={handleAuth}>
        {
          auth
            ? texts.buttonLogout
            : texts.buttonLogin
        }
      </button>
    </header>
  );
};

export default HeaderContext;
