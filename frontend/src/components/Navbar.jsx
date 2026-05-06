import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    useContext
} from "react";

import {
    AuthContext
} from "../context/AuthContext";

function Navbar() {
    const { user } =
    useContext(AuthContext);

    const navigate =
        useNavigate();

    const { logout } =
        useContext(AuthContext);

    const handleLogout =
        () => {

            logout();

            navigate("/login");
        };

    return (

        <div className="bg-white shadow px-10 py-5 flex items-center justify-between">

            <div className="flex items-center gap-8">

                <h1 className="text-2xl font-bold">
                    Team Task Manager
                </h1>

                <Link
                    to="/dashboard"
                    className="font-medium hover:text-blue-500"
                >
                    Dashboard
                </Link>

                <Link
                    to="/projects"
                    className="font-medium hover:text-blue-500"
                >
                    Projects
                </Link>

                <Link
                    to="/tasks"
                    className="font-medium hover:text-blue-500"
                >
                    Tasks
                </Link>

            </div>

            <p className="font-medium">

    {user?.role}

</p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>

        </div>
    );
}

export default Navbar;