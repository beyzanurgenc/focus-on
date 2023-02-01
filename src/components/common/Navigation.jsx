import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../../controllers/userController";
import classes from '../style.module.css';
import navbarIcon from '../../assets/icons/navbar_icon.png';

const Navigation = () => {
    const navigate = useNavigate();
    const isActiveCheck = (isActive) => {
        return isActive ? classes.active : undefined;
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-danger">
            <div class="container-fluid">
                <div class=" collapse navbar-collapse">
                    <li class="nav-item">
                        <NavLink
                            to="/"
                            end="/"
                        >
                            <img src={navbarIcon} alt="loading..." height="50" />
                        </NavLink>
                    </li>
                    <ul class={"navbar-nav mx-auto " + classes.list}>
                        <li class="nav-item">
                            <NavLink
                                to="/"
                                end="/"
                                className={({ isActive }) => isActiveCheck(isActive)}>
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                to="/test"
                                className={({ isActive }) => isActiveCheck(isActive)}>
                                Test
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