import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { createTask, getTasks, updateTaskStatus } from "../api/taskApi";

import { getProjects } from "../api/projectApi";
import {
    useContext
} from "react";

import {
    AuthContext
} from "../context/AuthContext";

function TasksPage() {
    const { user } =
    useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    dueDate: "",
    projectId: "",
    assignedToUserId: "",
  });

  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await getTasks();

      setTasks(response);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await getProjects();

      setProjects(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(formData);

      setFormData({
        title: "",
        description: "",
        priority: "MEDIUM",
        dueDate: "",
        projectId: "",
        assignedToUserId: "",
      });

      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message);
    }
  };

  const handleStatusUpdate = async (taskId, status) => {
    try {
      await updateTaskStatus(taskId, { status });

      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>

{
    user?.role === "ADMIN" && (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
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

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="LOW">LOW</option>

          <option value="MEDIUM">MEDIUM</option>

          <option value="HIGH">HIGH</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="projectId"
          value={formData.projectId}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="">Select Project</option>

          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="assignedToUserId"
          placeholder="Assign User ID"
          value={formData.assignedToUserId}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          Create Task
        </button>
      </form>
    )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => {
          const isOverdue = new Date(task.dueDate) < new Date();

          return (
            <div
              key={task.id}
              className={`p-6 rounded-xl shadow bg-white ${
                isOverdue ? "border-2 border-red-500" : ""
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{task.title}</h2>

              <p className="text-gray-600 mb-4">{task.description}</p>

              <div className="flex justify-between mb-2">
                <span className="font-medium">{task.priority}</span>

                <span className="font-medium">{task.status}</span>
              </div>

              <p className="text-sm text-gray-500 mb-4">Due: {task.dueDate}</p>

              {
    user?.id === task.assignedTo?.id && (

        <select
            value={task.status}
            onChange={(e) =>
                handleStatusUpdate(
                    task.id,
                    e.target.value
                )
            }
            className="border p-2 rounded w-full"
        >

            <option value="TODO">
                TODO
            </option>

            <option value="IN_PROGRESS">
                IN_PROGRESS
            </option>

            <option value="DONE">
                DONE
            </option>

        </select>
    )
}
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default TasksPage;
