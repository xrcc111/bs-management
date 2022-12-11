import React, { useState } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/', <PieChartOutlined />),
  getItem('Option 2', '/page', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const MainMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const navigateto = useNavigate()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigateto(e.key)
  }

  // openKeys记录当前那个展开的key的数组
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/']}
      mode="inline"
      items={items}
      onClick={handleMenuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MainMenu