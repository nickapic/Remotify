import { List, Avatar , notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import React from 'react'

const data = [
  {
    title: 'Tadas',
    description: "IT Team Lead",
    content: "Has Booked Workspace in DC Pier from 10-15 on everyday this week. Would you like to join and work with this colleague?"
  },
  {
    title: 'Migle ',
    description: "IT Specialist",
    content: "Has Invited you for Coffee in Uniq along 3 others for 1 hour on 15th October. Would you like to Join?",
  },
  {
    title: 'Agota ',
    description: "IT Specialist",
    content: "Has Booked Workspace in DC Pier for 2.5 hours on 16th October. Would you like to Join?"
  }
];

const openNotification = () => {
    notification.open({
      message: 'Calendar Event has Been Added',
      description:
        "Your Meeting event has been added to your Calender you can check it out in the My Reservations section" ,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };


export const Update = () => {
    return (
        <div className="updates-card">
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="update-item">
            
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={item.title}
              description={item.description}
            />
            <p>{item.content}</p>
            <div className="btn-update">
                <button className="join-plan" onClick={() => { openNotification();  }}>Join</button>
            </div>
            
          </List.Item>
        )}
      />
    </div>
    )
}
  