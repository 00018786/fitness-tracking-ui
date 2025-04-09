import { API_URL } from './constants';

export interface User {
  id: number;
  name: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data as User[];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { id, ...data } as User;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}; 