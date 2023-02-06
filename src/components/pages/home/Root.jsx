import { Outlet } from "react-router-dom";
import Navigation from "../../common/Navigation";

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