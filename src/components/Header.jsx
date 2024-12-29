const Header = ({ theme, handleTheme, texts, handleLanguage, auth, handleAuth }) => {

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
        id="light"
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        onClick={handleTheme}
        type="radio"
        name="theme"
        id="dark"
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
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

export default Header;
