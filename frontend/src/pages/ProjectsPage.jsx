import {
    useEffect,
    useState
} from "react";
import MainLayout from "../layouts/MainLayout";
import {
    useContext
} from "react";

import {
    AuthContext
} from "../context/AuthContext";
import {
    createProject,
    getProjects
} from "../api/projectApi";

function ProjectsPage() {

    const { user } =
    useContext(AuthContext);

    const [projects, setProjects] =
        useState([]);

    const [formData, setFormData] =
        useState({

            name: "",
            description: ""
        });

    const [error, setError] =
        useState("");

    const fetchProjects =
        async () => {

            try {

                const response =
                    await getProjects();

                setProjects(response);

            } catch (err) {

                console.log(err);
            }
        };

    useEffect(() => {

        fetchProjects();

    }, []);

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                await createProject(formData);

                setFormData({

                    name: "",
                    description: ""
                });

                fetchProjects();

            } catch (err) {

                setError(
                    err.response?.data?.message
                );
            }
        };

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-8">
                Projects
            </h1>

        {
            user?.role === "ADMIN" && (
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow mb-10"
            >

                <h2 className="text-2xl font-semibold mb-4">
                    Create Project
                </h2>

                {
                    error && (

                        <p className="text-red-500 mb-4">
                            {error}
                        </p>
                    )
                }

                <input
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-4"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-4"
                />

                <button
                    className="bg-black text-white px-6 py-3 rounded"
                >
                    Create Project
                </button>

            </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    projects.map((project) => (

                        <div
                            key={project.id}
                            className="bg-white p-6 rounded-xl shadow"
                        >

                            <h2 className="text-2xl font-bold mb-2">
                                {project.name}
                            </h2>

                            <p className="text-gray-600">
                                {project.description}
                            </p>

                        </div>
                    ))
                }

            </div>

        </MainLayout>
    );
}

export default ProjectsPage;