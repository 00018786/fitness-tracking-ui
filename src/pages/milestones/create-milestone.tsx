import React from 'react';
import { Typography, Space, Card, Form, Input, DatePicker, Button } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

export const CreateMilestone = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>Create New Milestone</Title>
      <Card>
        <Form layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input placeholder="Milestone title" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Describe your milestone" />
          </Form.Item>
          <Form.Item label="Target Date" name="targetDate">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Milestone
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};
