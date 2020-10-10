import React from 'react'
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import { Menu, Dropdown, Button, notification } from 'antd';
import { ReactComponent as MapSVG } from "../map.svg";
import { Checkbox } from 'antd';
import { ModalPop } from './modal_toinvite';
import { SmileOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          Uniq
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          DC PIER
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          DC Valley
        </a>
      </Menu.Item>
    </Menu>
  );

  
  const floors = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          1
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          2
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          3
        </a>
      </Menu.Item>
    </Menu>
  );
export const TimeBooking = () => {
    const openNotification = () => {
        const args = {
          message: 'Your Booking has been Confirmed',
          description:
            'Booking for Working from home has been confirmed please Check In once you reach the workplace',
          duration: 10,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        };
        notification.open(args);
      };
    const { RangePicker } = TimePicker;
    const format = 'HH:mm';
    return (
    <div className="section_time">
        <div className="time-booker">
            <div className="text-headline">What time would you like to Book?</div>
            <div className="time-picker_section">
                <label htmlFor="#" className="time-picker_label">Start Time : End Time</label>
                <RangePicker format={format}/>
            </div>
            <div className="calendar-section">
                <label htmlFor="#" className="time-picker_label">Date</label>
                <Calendar fullscreen={false} className="calender"/>
            </div>
        </div>
        <div className="time-booker-left">
        <div className="text-headline">What Location would you like to Book?</div>
        <div className="location-dropmenu">
            <Dropdown overlay={menu} placement="bottomCenter" className="btn">
                <Button >Select the Building </Button>
            </Dropdown>
            <Dropdown overlay={floors} placement="bottomCenter" className="btn">
                <Button >Floor</Button>
            </Dropdown>
        </div>
            <MapSVG width="120%" height="auto"/>
            <div className="checkboxes-section">
                <Checkbox> Invite My Team</Checkbox>
                <ModalPop />
            </div>
            <Button type="primary" onClick={openNotification}>Reserve Place</Button>
        </div>
        
    </div>
       
    )
}
