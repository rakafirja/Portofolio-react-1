import  { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Portofolio Saya</div>
            <ul className="navbar-menu">
                <li>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
                </NavLink>
                </li>
                <li>  
                <NavLink
                 to="/contact"
                 className={({ isActive }) => (isActive ? "active" : "")}>
                    Contact
                    </NavLink>
                    </li>
                 </ul>
        </nav>
    );
}

export default Navbar;