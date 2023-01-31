import { Outlet } from "react-router-dom";
import Navigation from "../../common/Navigation";

//TODO: control user token, if not exists navigate to Login page, useNavigate() 
const Root = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;