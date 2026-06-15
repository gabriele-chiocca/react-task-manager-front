import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `nav-link active` : `nav-link`
              }
            >
              Lista Task
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                isActive ? `nav-link active` : `nav-link`
              }
            >
              Aggiunti Task
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
