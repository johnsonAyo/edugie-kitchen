import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className="header">
        <Link to="#">
          <img className="logo" alt="" src="img/edugielogo.jpeg" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#how">
                About Edugie kitchen
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#meals">
                Meals Menu
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#pricing">
                Availabe Meals
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">
                Pay Us A visit
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
