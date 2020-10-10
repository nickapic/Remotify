import React, { useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Category } from '../components/categorymenu';
export const MyColleagues = () => {
    const [current, setCurrent] = useState("followers");
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <div className="colleague-section"> 
        <Category />
         <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
        <Menu.Item key="Followers" icon={<MailOutlined />} className="menu-item">
          Followers
        </Menu.Item>
        <Menu.Item key="following" icon={<MailOutlined />} className="menu-item">
          Following
        </Menu.Item>
      </Menu>
    </div>
    )
}
