import { NavLink, useNavigate } from "react-router-dom";
import navbarIcon from '../../assets/icons/navbar_icon.png';
import { deleteToken } from "../../controllers/userController";
import classes from '../style.module.css';

const Navigation = () => {
    const navigate = useNavigate();
    const isActiveCheck = (isActive) => {
        return isActive ? classes.active : undefined;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger">
            <div className="container-fluid">
                <div className=" collapse navbar-collapse">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            end="/"
                        >
                            <img src={navbarIcon} alt="loading..." height="50" />
                        </NavLink>
                    </li>
                    <ul className={"navbar-nav mx-auto " + classes.list}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end="/"
                                className={({ isActive }) => isActiveCheck(isActive)}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/safe"
                                className={({ isActive }) => isActiveCheck(isActive)}>
                                Safe Place
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-outline-danger logout-btn" onClick={() => { deleteToken(); navigate("/login"); }}>Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;