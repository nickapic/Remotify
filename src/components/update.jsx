import { List, Avatar } from 'antd';
import React from 'react'

const data = [
  {
    title: 'Aniket Chauhan',
    description: "IT Specialist",
    content: "Has Booked GYM for 2 hours on 17th October. Would you like to Join?",
  },
  {
    title: 'Migle Katiniene',
    description: "IT Specialist",
    content: "Has Invited you for Coffee in Uniq along 3 others for 1 hour on 15th October. Would you like to Join?",
  },
  {
    title: 'Ema Darbutaite',
    description: "IT Specialist",
    content: "Has Booked Workspace for 7 hours in UNIQ on 19th October. Would you like to Join?"
  },
  {
    title: 'Agota Suilokaite',
    description: "IT Specialist",
    content: "Has Booked Workspace in DC Pier for 2.5 hours on 16th October. Would you like to Join?"
  },
];




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
                <button className="join-plan">Join Plan</button>
            </div>
            
          </List.Item>
        )}
      />
    </div>
    )
}
  