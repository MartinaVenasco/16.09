import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const links = [
    { href: "/?page=1", label: "HOME", title: "Vai alla home"
   },

  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={title ? title : label}
              
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                opacity: isActive ? 0.4 : 1,
                color: "rgb(18, 18, 18)" ,
                textDecoration: "none", 
              })}
              className={({ isActive }) =>
                isActive ? "nav nav--active" : "nav"
              } end
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
