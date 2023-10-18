import { FaSun, FaMoon } from "react-icons/fa";

export default function Header(props) {
  const { theme, setTheme } = props;

  function switchTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <nav className={"navbar navbar-expand-lg navbar-" + theme + " bg-" + theme}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Task Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>

          <ul className="navbar-nav me-2">
            <li className="nav-item" onClick={switchTheme}>
              {theme === "light" ? "light" : "dark"}
              {theme === "light" ? (
                <FaSun className="text-black ms-2" />
              ) : (
                <FaMoon className="text-white ms-2" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
