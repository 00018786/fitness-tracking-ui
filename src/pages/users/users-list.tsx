import React, { useState } from 'react';
import {
  Typography,
  Space,
  Table,
  Card,
  Avatar,
  Button,
  Popconfirm,
  message,
} from 'antd';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const UsersList = () => {
  // Sample data with only user names
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Michael Johnson' },
    { id: '4', name: 'Sarah Williams' },
  ]);

  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    message.success('User deleted successfully');
  };

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          {name}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_item: any, record: { id: string }) => (
        <Popconfirm
          title="Delete user"
          description="Are you sure you want to delete this user?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>Users</Title>
      <Card>
        <Table
          rowKey="id"
          dataSource={users}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </Space>
  );
};
