const Header = ({ theme, handleTheme }) => {

  return (
    <header className={theme}>
      <h2>Mi Página</h2>
      <h3>Cabecera</h3>
      <select name="lenguage">
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
      <label htmlFor="light">Claro</label>
      <input
        onClick={handleTheme}
        type="radio"
        name="theme"
        id="dark"
        value="dark"
      />
      <label htmlFor="dark">Oscuro</label>
      <br />
      <button>Iniciar sesión</button>
    </header>
  );
};

export default Header;
