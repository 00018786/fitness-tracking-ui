import { TrophyOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const mainMenuItems: MenuItem[] = [
    {
      key: 'all-milestones',
      icon: <TrophyOutlined />,
      label: 'All Milestones',
    },
    {
      key: 'create-milestone',
      icon: <PlusCircleOutlined />,
      label: 'Create Milestone',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Users',
    },
  ];