import React, { useState } from 'react'
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';



export const Profile = () => {
    const [staus, setStatus] = useState(false)
    return (
        <div>
            <>
        <List
          dataSource={[
            {
              name: 'John Doe ',
            },
            {
              name: 'Paul Doe',
            },
            {
                name: 'James Doe',
            },
            {
                name:'Simon Doe'
            }
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a  key={`a-${item.id}`}>
                  {}
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser XTech"
              />
            </List.Item>
          )}
        />
        
      </>
        </div>
    )
}


