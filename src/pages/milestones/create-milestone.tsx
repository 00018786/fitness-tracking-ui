import { Typography, Space, Card, Form, Input, DatePicker, Button, message, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createMilestone } from '../../services/milestoneService';
import { fetchUsers } from '../../services/userService';
import { Milestone } from '../../services/types';
import { User } from '../../services/userService';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const { Title } = Typography;
const { TextArea } = Input;

type MilestoneFormData = Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>;

export const CreateMilestone = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        message.error('Failed to load users');
        console.error('Error loading users:', error);
      } finally {
        setUsersLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleSubmit = async (values: MilestoneFormData) => {
    try {
      setLoading(true);
      await createMilestone(values);
      message.success('Milestone created successfully');
      navigate('/all-milestones');
    } catch (error) {
      message.error('Failed to create milestone');
      console.error('Error creating milestone:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>Create New Milestone</Title>
      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: 'Please enter a title' },
              { max: 100, message: 'Title must be less than 100 characters' }
            ]}
          >
            <Input placeholder="Milestone title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ max: 500, message: 'Description must be less than 500 characters' }]}
          >
            <TextArea rows={4} placeholder="Describe your milestone" />
          </Form.Item>

          <Form.Item
            label="User"
            name="userId"
            rules={[{ required: true, message: 'Please select a user' }]}
          >
            <Select
              placeholder="Select a user"
              loading={usersLoading}
              options={users.map(user => ({
                value: user.id,
                label: user.name
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Target Date"
            name="targetDate"
            rules={[{ required: true, message: 'Please select a target date' }]}
          >
            <DatePicker 
              style={{ width: '100%' }}
              format="YYYY-MM-DD"
              disabledDate={(current) => {
                return current && current < dayjs().startOf('day');
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create Milestone
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};
