import React, { Fragment } from 'react'
import { Category } from '../components/categorymenu'
import 'antd/dist/antd.css';
import { Button, Select, notification } from 'antd';

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const openNotification = () => {
    const args = {
        message: 'Your Item has been checked out',
        description:
            'Thank you for checking out equipment, we hope it makes your work at home easier!',
        duration: 10,
    };
    notification.open(args);
};

export class EquipmentPage extends React.Component {

    

    render() {
        return (
            <Fragment>

            <Category />
            <div className="time-booker">
                <div className="text-headline">Take home equipment</div>
                <label htmlFor="#" className="time-picker_label">Item</label>
                <div className="item-booker">

                        <Select style={{ width: 200 }} defaultValue="Monitor" onChange={handleChange}>
                        <Option value="Monitor">Monitor</Option>
                        <Option value="Docking Station">Docking Station</Option>
                        <Option value="Chair">Chair</Option>
                    </Select>
                </div>

                <label htmlFor="#" className="time-picker_label">Building</label>
                <div className="item-booker">

                        <Select style={{ width: 200 }} defaultValue="Uniq" onChange={handleChange}>
                        <Option value="Uniq">Uniq</Option>
                        <Option value="DC Pier">DC Pier</Option>
                        <Option value="DC Valley">DC Valley</Option>
                    </Select>
                </div>

                <label htmlFor="#" className="time-picker_label">Floor</label>
                <div className="item-booker">

                        <Select style={{ width: 150 }} defaultValue="1" onChange={handleChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                    </Select>
                </div>
                <Button style={{ width: 150 }} type="primary" onClick={() => { openNotification() }}>Check Out</Button>
            </div>
            </Fragment>

        )
    }
}