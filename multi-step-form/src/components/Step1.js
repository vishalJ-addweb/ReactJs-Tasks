import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import {
    Form,
    Input,
    InputNumber,
    Radio,
    Checkbox,
    Button,
    DatePicker,
    TimePicker
} from 'antd';

const Step1 = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const dateFormat = 'YYYY/MM/DD';
    const timeFormat = 'HH:mm:ss';

    return (
        <div className="container">
            <Form name="basic"
                labelCol={{ span: 3 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <h3>Personal Details</h3>
                <Form.Item label="Select Date">
                    <DatePicker defaultValue={moment()} format={dateFormat} placeholder="YYYY/MM/DD" />
                </Form.Item>
                <Form.Item label="Select Time">
                    <TimePicker defaultValue={moment()} format={timeFormat} />
                </Form.Item>
                <Form.Item label="First Name" name="fname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Last Name" name="lname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="email" label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="radio-group" label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a gender!',
                        },
                    ]}>
                    <Radio.Group>
                        <Radio value="a">Female</Radio>
                        <Radio value="b">Male</Radio>
                        <Radio value="c">Undifferentiated</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="age"
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 110,
                        },
                    ]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item name="checkbox-group" label="Mode of transportation">
                    <Checkbox.Group>
                        <Checkbox value="A"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Car
                        </Checkbox>
                        <Checkbox value="B"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Motorbike
                        </Checkbox>
                        <Checkbox value="C"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Bicycle
                        </Checkbox>
                        <Checkbox value="D"
                            style={{
                                lineHeight: '32px',
                            }}>
                            Boat
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                {/* <Form.Item
                    wrapperCol={{
                        offset: 3,
                        span: 16,
                    }}>
                    <Button type="primary">
                        Next
                    </Button>
                </Form.Item> */}
            </Form>
        </div>
    )
}

export default Step1
