import { NavLink } from "react-router-dom";
import classes from '../style.module.css';

const Navigation = () => {

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
        </header>
    );
}

export default Navigation;