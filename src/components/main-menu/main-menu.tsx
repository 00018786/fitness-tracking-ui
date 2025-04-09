import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { mainMenuItems } from './constants';
import { useNavigate, useLocation } from 'react-router-dom';

export const MainMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set the selected key based on current path
  const selectedKey = location.pathname === '/' 
    ? 'all-milestones' 
    : location.pathname.substring(1);
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Menu
      mode="horizontal"
      items={mainMenuItems}
      onClick={handleMenuClick}
      selectedKeys={[selectedKey]}
      style={{ width: '100%' }}
      theme="dark"
    />
  );
};