import {
    useEffect,
    useState
} from "react";

import {
    getDashboardStats
} from "../api/dashboardApi";

import MainLayout from "../layouts/MainLayout";

function DashboardPage() {

    const [stats, setStats] =
        useState(null);

    const fetchDashboardStats =
        async () => {

            try {

                const response =
                    await getDashboardStats();

                setStats(response);

            } catch (err) {

                console.log(err);
            }
        };

    useEffect(() => {

        fetchDashboardStats();

    }, []);

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-gray-500">
                        Total Tasks
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        {stats?.totalTasks || 0}
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-gray-500">
                        Completed
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        {stats?.completedTasks || 0}
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-gray-500">
                        Pending
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        {stats?.pendingTasks || 0}
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-gray-500">
                        Overdue
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        {stats?.overdueTasks || 0}
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-gray-500">
                        My Tasks
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        {stats?.myTasks || 0}
                    </p>

                </div>

            </div>

        </MainLayout>
    );
}

export default DashboardPage;