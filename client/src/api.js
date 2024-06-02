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

export const getAllVendors = async () => {
    try {
        const response = await axios.get(`${API_URL}/vendors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all vendors:', error);
        throw error;
    }
};

export const getSuggestions = async (newFood) => {
    try {
        const response = await axios.get(`${API_URL}/suggest`, newFood);
        return response.data;
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw error;
    }
};