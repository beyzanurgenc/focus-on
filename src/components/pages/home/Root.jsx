import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navigation from "../../common/Navigation";

//TODO: control user token, if not exists navigate to Login page, useNavigate() 
const Root = () => {
    const token = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

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