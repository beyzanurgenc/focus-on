import { NavLink, useNavigate } from "react-router-dom";
import { deleteToken } from "../../controllers/userController";
import classes from '../style.module.css';

const Navigation = () => {
    const navigate = useNavigate();
    const isActiveCheck = (isActive) => {
        return isActive ? classes.active : undefined;
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            end="/"
                            className={({ isActive }) => isActiveCheck(isActive)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/test"
                            className={({ isActive }) => isActiveCheck(isActive)}>
                            Test
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <button onClick={() => { deleteToken(); navigate("/login"); }}>Logout</button>
            </div>
        </header>
    );
}

export default Navigation;