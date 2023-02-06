import { Navigate } from 'react-router-dom';
import { checkToken } from '../../controllers/userController';

const PrivateRoute = ({ children }) => {
    const authUser = checkToken();

    if (!authUser) {
        return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute;