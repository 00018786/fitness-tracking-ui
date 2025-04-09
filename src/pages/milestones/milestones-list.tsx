import { Typography, Space, Card, Table, Button, message, Avatar, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchMilestones } from '../../services/milestoneService';
import { fetchUsers, fetchUserById } from '../../services/userService';
import { Milestone } from '../../services/types';
import { User } from '../../services/userService';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title } = Typography;

export const MilestonesList = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [milestonesData, usersData] = await Promise.all([
        fetchMilestones(),
        fetchUsers(),
      ]);

      setMilestones(milestonesData);

      // Create a map of users for quick lookup
      const usersMap: Record<number, User> = {};
      for (const user of usersData) {
        usersMap[user.id] = user;
      }
      setUsers(usersMap);
    } catch (error) {
      message.error('Failed to load data');
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: Milestone) => (
        <Space>
          <Tag color={dayjs(record.targetDate).isBefore(dayjs()) ? 'red' : 'green'}>
            {dayjs(record.targetDate).isBefore(dayjs()) ? 'Overdue' : 'Active'}
          </Tag>
          {title}
        </Space>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
      render: (userId: number) => {
        const user = users[userId];
        return user ? (
          <Space>
            <Avatar icon={<UserOutlined />} />
            {user.name}
          </Space>
        ) : 'Unknown User';
      },
    },
    {
      title: 'Target Date',
      dataIndex: 'targetDate',
      key: 'targetDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Milestone) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} size="small">
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>All Milestones</Title>
      <Card>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={milestones}
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </Space>
  );
};
