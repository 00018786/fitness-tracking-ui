import { Typography, Space, Card, Empty } from 'antd';

const { Title } = Typography;

export const MilestonesList = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={2}>All Milestones</Title>
      <Card>
        <Empty
          description="No milestones found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </Card>
    </Space>
  );
};
