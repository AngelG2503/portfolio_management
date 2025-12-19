import axios from 'axios';

const API_URL = 'https://portfolio-backend-fdp8.onrender.com/api';

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const addProject = (data) => axios.post(`${API_URL}/projects`, data);

export const getClients = () => axios.get(`${API_URL}/clients`);
export const addClient = (data) => axios.post(`${API_URL}/clients`, data);

export const submitContact = (data) => axios.post(`${API_URL}/contact`, data);
export const getContacts = () => axios.get(`${API_URL}/contact`);

export const subscribe = (data) => axios.post(`${API_URL}/subscribers`, data);
export const getSubscribers = () => axios.get(`${API_URL}/subscribers`);
