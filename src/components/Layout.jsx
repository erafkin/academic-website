import { NavLink, Outlet } from "react-router-dom";
import { site } from "../data/site.js";

const navClass = ({ isActive }) => (isActive ? "active" : undefined);

export default function Layout() {
  return (
    <div className="shell">
      <header>
        <p className="brand">{site.name}</p>
        <nav>
          <NavLink to="/" end className={navClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/publications" className={navClass}>
            Publications
          </NavLink>
          <a href={site.cv} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
