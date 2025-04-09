import { API_URL } from './constants';
import { Milestone } from './types';

export const fetchMilestones = async (): Promise<Milestone[]> => {
  try {
    const response = await fetch(`${API_URL}/milestones`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data as Milestone[];
  } catch (error) {
    console.error('Error fetching milestones:', error);
    throw error;
  }
}; 