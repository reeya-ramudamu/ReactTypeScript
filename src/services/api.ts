import axios from 'axios';
import { Project } from '../models/Project';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(`${API_URL}/posts`);
  return response.data;
};

export const fetchProjectById = async (id: number): Promise<Project> => {
  const response = await axios.get<Project>(`${API_URL}/posts/${id}`);
  return response.data;
};
