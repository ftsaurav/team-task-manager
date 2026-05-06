import api from "./axios";

export const createTask =
    async (data) => {

        const response =
            await api.post(
                "/tasks",
                data
            );

        return response.data;
    };

export const getTasks =
    async () => {

        const response =
            await api.get(
                "/tasks"
            );

        return response.data;
    };

export const getMyTasks =
    async () => {

        const response =
            await api.get(
                "/tasks/my"
            );

        return response.data;
    };

export const updateTaskStatus =
    async (taskId, data) => {

        const response =
            await api.patch(
                `/tasks/${taskId}/status`,
                data
            );

        return response.data;
    };