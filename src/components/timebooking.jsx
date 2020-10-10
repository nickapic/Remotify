import React from 'react'
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import { Menu, Dropdown, Button, Checkbox, DatePicker, Row, Col, Select } from 'antd';
import '../css/timebooking.css';

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

const { Option } = Select;
const { RangePicker } = TimePicker;
const format = 'HH:mm';


export class TimeBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repetitionInterval: "Weekly",
            repetitionWeekly: "1",
            onMon: false,
            onTue: false,
            onWed: false,
            onThu: false,
            onFri: false,
            repeat: true
        }

        this.onRepeat = this.onRepeat.bind(this);
        this.onRepetitionInterval = this.onRepetitionInterval.bind(this);
        this.onRepetitionWeekly = this.onRepetitionWeekly.bind(this);
        this.onMon = this.onMon.bind(this);
        this.onTue = this.onTue.bind(this);
        this.onWed = this.onWed.bind(this);
        this.onThu = this.onThu.bind(this);
        this.onFri = this.onFri.bind(this);
    }

    onRepeat = function(e) {
        this.setState({
            repeat: e.target.checked
        });
    }

    onRepetitionInterval = function(e) {
        this.setState({
            repetitionInterval: e
        });
    }

    onRepetitionWeekly = function(e) {
        this.setState({
            repetitionWeekly: e
        });
    }

    onMon = function (e) {
        this.setState({
            onMon: e
        });
    }
    onTue = function (e) {
        this.setState({
            onTue: e
        });
    }
    onWed = function (e) {
        this.setState({
            onWed: e
        });
    }
    onThu = function (e) {
        this.setState({
            onThu: e
        });
    }
    onFri = function (e) {
        this.setState({
            onFri: e
        });
    }

    
    render() {
        return (
            <div className="section_time">
                <div className="time-booker">
                    <div className="text-headline">What time would you like to Book?</div>
                    <div className="time-picker_section">
                        <label htmlFor="#" className="time-picker_label">Start Time : End Time</label>
                        <RangePicker format={format} />
                    </div>
                    <div className="calendar-section">
                        <label htmlFor="#" className="time-picker_label">Date</label>
                        <Calendar fullscreen={false} className="calender" />
                    </div>
                    <div className="repeat-section">
                        <Row>
                            <Col span={24}>
                                <Checkbox checked={ this.state.repeat } onChange={this.onRepeat}> Repeat </Checkbox>
                            </Col>
                        </Row>
                        {
                            this.state.repeat && 
                            <div>
                                <Row>
                                    <Col span={12}>
                                        <div>Start Date</div>
                                    </Col>
                                    <Col span={12}>
                                        <div>End Date</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <DatePicker style={{ width: '50%' }} />
                                    </Col>
                                    <Col span={12}>
                                        <DatePicker style={{ width: '50%' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Select value={this.state.repetitionInterval} defaultValue={this.state.repetitionInterval} onChange={this.onRepetitionInterval}>
                                            <Option value="Daily">Daily</Option>
                                            <Option value="Weekly">Weekly</Option>
                                            <Option value="Monthly">Monthly</Option>
                                        </Select>
                                    </Col>
                                    {
                                        this.state.repetitionInterval === "Weekly" &&
                                        <Col span={12}>
                                            Every
                                            <Select value={this.state.repetitionWeekly} defaultValue={this.state.repetitionWeekly} onChange={this.onRepetitionWeekly}>
                                                    <Option value="1">1</Option>
                                                    <Option value="2">2</Option>
                                                </Select>
                                        week(s) on
                                        </Col>
                                    }
                                </Row>
                                {
                                    this.state.repetitionInterval === "Weekly" &&
                                    <Row>
                                        <Col span={12}></Col>
                                        <Col span={12}>
                                            <Checkbox onChange={this.onMon}> Mon </Checkbox>
                                            <Checkbox onChange={this.onTue}> Tue </Checkbox>
                                            <Checkbox onChange={this.onWed}> Wed </Checkbox>
                                            <Checkbox onChange={this.onThue}> Thu </Checkbox>
                                            <Checkbox onChange={this.onFri}> Fri </Checkbox>
                                        </Col>
                                    </Row>
                                }
                            </div>
                        
                        }
                        
                    </div>
                </div>
                <div className="time-booker-left">
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>Select the Building </Button>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
