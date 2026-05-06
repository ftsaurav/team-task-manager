import api from "./axios";

const getCurrentUser = async () => {

    const response = await api.get(
        "/users/me"
    );

    return response.data;
};

export {
    getCurrentUser
};