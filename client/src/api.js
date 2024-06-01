import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL; // Your Express server URL

export const getHelloWorld = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Hello World:', error);
        throw error;
    }
};

export const getAllFoods = async () => {
    try {
        const response = await axios.get(`${API_URL}/foods`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all foods:', error);
        throw error;
    }
};

export const getSuggestions = async (foods) => {
    try {
        const response = await axios.get(`${API_URL}/api`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Hello World:', error);
        throw error;
    }
};