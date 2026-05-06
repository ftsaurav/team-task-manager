import api from "./axios";

export const createProject =
    async (data) => {

        const response =
            await api.post(
                "/projects",
                data
            );

        return response.data;
    };

export const getProjects =
    async () => {

        const response =
            await api.get(
                "/projects"
            );

        return response.data;
    };

export const addMember =
    async (projectId, data) => {

        const response =
            await api.post(
                `/projects/${projectId}/members`,
                data
            );

        return response.data;
    };