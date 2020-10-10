import React from 'react'
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Uniq
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          DC PIER
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          DC Valley
        </a>
      </Menu.Item>
    </Menu>
  );


export const TimeBooking = () => {
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
            <div className="time-booker-left">
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
            </Dropdown>
            </div>
        </div>
        </div> 
    )
}
