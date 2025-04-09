import { Typography, Space, Card, Table, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { fetchMilestones } from '../../services/milestoneService';
import { Milestone } from '../../services/types';
import { milestoneColumns } from './constants';


const { Title } = Typography;

export const MilestonesList = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMilestones = async () => {
    try {
      setLoading(true);
      const data = await fetchMilestones();
      setMilestones(data);
    } catch (error) {
      message.error('Failed to load milestones');
      console.error('Error loading milestones:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMilestones();
  }, []);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>All Milestones</Title>
      <Card>
        <Table
          rowKey="id"
          columns={milestoneColumns}
          dataSource={milestones}
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </Space>
  );
};
