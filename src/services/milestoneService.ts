import { API_URL } from './constants';
import { Milestone } from './types';

const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // Returns YYYY-MM-DD
};

export const fetchMilestones = async (): Promise<Milestone[]> => {
  try {
    const response = await fetch(`${API_URL}/milestones`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.map((milestone: Milestone) => ({
      ...milestone,
      targetDate: milestone.targetDate ? formatDate(milestone.targetDate) : undefined,
      createdAt: formatDate(milestone.createdAt),
      updatedAt: formatDate(milestone.updatedAt),
    })) as Milestone[];
  } catch (error) {
    console.error('Error fetching milestones:', error);
    throw error;
  }
};

export const createMilestone = async (milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Promise<Milestone> => {
  try {
    const formattedMilestone = {
      ...milestone,
      targetDate: milestone.targetDate ? formatDate(milestone.targetDate) : undefined,
    };

    const response = await fetch(`${API_URL}/milestones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedMilestone),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      ...data,
      targetDate: data.targetDate ? formatDate(data.targetDate) : undefined,
      createdAt: formatDate(data.createdAt),
      updatedAt: formatDate(data.updatedAt),
    } as Milestone;
  } catch (error) {
    console.error('Error creating milestone:', error);
    throw error;
  }
}; 