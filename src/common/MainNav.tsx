import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MainNav.css";

function MainNav() {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUsername(parsed.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="container">

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links-zone">

            <li className="nav-item">
              <Link className="nav-btn" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-btn" to="/game">Game</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-btn" to="/game1">Game1</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-btn" to="/game2">Game2</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-btn" to="/game3">Game3</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-btn" to="/game4">Game4</Link>
            </li>

            {!username && (
              <li className="nav-item">
                <Link className="nav-btn" to="/login">Login</Link>
              </li>
            )}
          </ul>

          {username && (
            <div className="d-flex align-items-center user-zone">
              <span className="me-3 user-greeting">
                Hi, <strong>{username}</strong>
              </span>
              <button
                className="btn btn-outline-danger logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
