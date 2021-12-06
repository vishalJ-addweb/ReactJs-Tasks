import React from 'react'
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button
} from 'antd';

const Step2 = () => {
    return (
        <div className="container">
            <h3>Address : </h3>
            <Form.Item label="Address Line 1" name="addL1"
                rules={[
                    {
                        required: true,
                        message: 'Please input your address!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item label="Address Line 2" name="addL2">
                <Input />
            </Form.Item>
            <Form.Item label="City" name="city"
                rules={[
                    {
                        required: true,
                        message: 'Please input your city!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item label="State" name="state"
                rules={[
                    {
                        required: true,
                        message: 'Please input your state!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item label="Country" name="country"
                rules={[
                    {
                        required: true,
                        message: 'Please input your country!',
                    },
                ]}>
                <Input />
            </Form.Item>
            {/* <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
                <Button type="primary" style={{ marginRight: "10px" }}>
                    Prev
                </Button>
                <Button type="primary">
                    Next
                </Button>
            </Form.Item> */}

        </div>
    )
}

export default Step2