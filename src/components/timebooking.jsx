import React from 'react'
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import '../css/timebooking.css';
import { Button, Checkbox, DatePicker, Row, Col, Select, notification } from 'antd';
import { ReactComponent as MapSVG } from "../first.svg";
import { ReactComponent as AnotherSVG } from "../another_building.svg";
import { ReactComponent as SelectSVG } from "../select_place.svg";
import { ReactComponent as ReservedSVG } from "../reserved.svg";
import { ModalPop } from './modal_toinvite';
import { SmileOutlined } from '@ant-design/icons';
import '../css/timebooking.css';

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
            repeat: true,
            select: false,
            reserve: false,
            building: "Uniq"
        }

        this.onRepeat = this.onRepeat.bind(this);
        this.onRepetitionInterval = this.onRepetitionInterval.bind(this);
        this.onRepetitionWeekly = this.onRepetitionWeekly.bind(this);
        this.onMon = this.onMon.bind(this);
        this.onTue = this.onTue.bind(this);
        this.onWed = this.onWed.bind(this);
        this.onThu = this.onThu.bind(this);
        this.onFri = this.onFri.bind(this);
        this.select = this.select.bind(this);
        this.reserve = this.reserve.bind(this);
        this.onBuilding = this.onBuilding.bind(this);
    }

    onRepeat = function (e) {
        this.setState({
            repeat: e.target.checked
        });
    }

    onRepetitionInterval = function (e) {
        this.setState({
            repetitionInterval: e
        });
    }

    onRepetitionWeekly = function (e) {
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

    select = function () {
        this.setState({
            select: true
        });
    }

    reserve = function () {
        this.setState({
            select: false,
            reserve: true
        });
    }

    onBuilding = function (e) {
        this.setState({
            building: e,
            select: false
        });
    }

    render() {
        return (
            <div className="section_time">
                <div className="time-booker">
                    <div className="text-headline">TIME</div>
                    <div className="time-picker_section">
                        <label htmlFor="#" className="time-picker_label">Start Time : End Time</label>
                        <RangePicker format={format} />
                    </div>
                    <div className="calendar-section">
                        <label htmlFor="#" className="time-picker_label">Date</label>
                        <DatePicker style={{ width: '50%' }} />
                    </div>
                    <div className="repeat-section">
                        <Row>
                            <Col span={24}>
                                <Checkbox checked={this.state.repeat} onChange={this.onRepeat}> Repeat </Checkbox>
                            </Col>
                        </Row>
                        {
                            this.state.repeat &&
                            <div className="repeat-section">
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
                                            <div className="pretty-line-left">Every</div>
                                            <Select value={this.state.repetitionWeekly} defaultValue={this.state.repetitionWeekly} onChange={this.onRepetitionWeekly}>
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                            </Select>
                                            <div className="pretty-line-right">week(s) on</div>
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
                <div className="time-booker-left repeat-section">
                    <div className="text-headline">LOCATION</div>
                    <div className="time-booker-left-selections">
                        <Row>
                            <Col span={24}>
                                <div>SEARCH BY</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div className="bigger-text">Building</div>
                            </Col>
                            <Col span={12}>
                                <div className="bigger-text">Space Type</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div>
                                    <Select defaultValue={this.state.building} onChange={this.onBuilding}>
                                        <Option value="Uniq">Uniq</Option>
                                        <Option value="DC Pier">DC Pier</Option>
                                        <Option value="DC Valley">DC Valley</Option>
                                    </Select>
                                </div>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue="Quiet">
                                    <Option value="Quiet">Quiet</Option>
                                    <Option value="Open">Open</Option>
                                    <Option value="Social">Social</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div className="bigger-text">Amenities</div>
                            </Col>
                            <Col span={6}>
                                <div className="bigger-text">Floor</div>
                            </Col>
                            <Col span={6}>
                                <div className="bigger-text">Desk</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div>
                                    <Checkbox> Monitors</Checkbox>
                                    <Checkbox> Docking Station</Checkbox>
                                    <Checkbox> Keyboard</Checkbox>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Select defaultValue="Select">
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select>
                            </Col>
                            <Col span={6}>
                                <Select defaultValue="Select">
                                    <Option value="3L">3L</Option>
                                    <Option value="5R">5R</Option>
                                    <Option value="3R">3R</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="floor-map-div">
                        {
                            this.state.select
                                ?
                                <SelectSVG width="120%" height="auto" />
                                :
                                (
                                    (this.state.building === "DC Pier" || this.state.building === "DC Valley")
                                        ?
                                        <AnotherSVG width="120%" height="auto" />
                                        :
                                        (
                                            this.state.reserve
                                                ?
                                                <ReservedSVG width="120%" height="auto" />
                                                :
                                                <MapSVG onClick={this.select} width="120%" height="auto" />
                                        )
                                )
                        }
                    </div>
                    <div className="checkboxes-section">
                        <Checkbox> Invite My Team</Checkbox>
                        <ModalPop />
                        <Button type="primary" onClick={() => { openNotification(); this.reserve() }}>Reserve Place</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
};
